
install_gh() {
  type -p curl >/dev/null || sudo apt install curl -y
  curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
  sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list >/dev/null
  sudo apt update
  sudo apt install gh -y
}

bump_package() {
  echo "== Bump the NPM package version =="
  yarn install
  yarn bundle
  yarn config set version-tag-prefix "v"
  yarn version --"$VERSION_LABEL" --no-git-tag-version
  echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >~/.npmrc
  yarn publish --non-interactive
}

raise_pr() {
  git config user.name "Joseph Mathew"
  git config user.email "joseph.mathew@bigbinary.com"
  git config core.hooksPath /dev/null
  git push origin --delete bump-version
  git checkout -b bump-version
  git add -A
  git commit -m "Bump version"
  git push --set-upstream origin bump-version
  gh pr create -B main -H bump-version -t "Bump version" -b "This is an automated PR." -l instant-mergepr -a @me
}

install_gh

LATEST_COMMIT_SHA=$(git log -1 --pretty=format:"%H")
echo "Latest commit SHA: $LATEST_COMMIT_SHA"

PR_NUMBER=$(gh pr list --state merged --search "$LATEST_COMMIT_SHA" --json number --jq ".[0].number")
echo "Last merged PR number: $PR_NUMBER"

PR_LABELS=$(gh pr view $PR_NUMBER --json labels --jq ".labels[].name" | tr "\n" " " | cut -d " " -f 1-)
echo "PR labels: $PR_LABELS"

[[ -z "$PR_LABELS" ]] && exit 0

ALL_VERSION_LABELS=(major minor patch)

PR_VERSION_LABELS=()
for version_label in "${ALL_VERSION_LABELS[@]}"; do
  if echo "$PR_LABELS" | grep -q -o "$version_label"; then
    PR_VERSION_LABELS+=("$version_label")
  fi
done

PR_VERSION_LABELS_STR="${PR_VERSION_LABELS[*]}"
echo "Semantic versions present in PR labels: $PR_VERSION_LABELS_STR"

VERSION_LABEL=$(echo "${PR_VERSION_LABELS[0]}" | xargs)
echo "Version label selected: $VERSION_LABEL"

[[ -z "$VERSION_LABEL" ]] && exit 0

if [[ -n "$VERSION_LABEL" ]]; then
  bump_package
  yarn upload
else
  echo "PR label doesn't exist"
fi

raise_pr
