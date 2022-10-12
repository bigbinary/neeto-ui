#!/bin/sh

prevent_pushing_to_main() {
  current_branch=`git symbolic-ref HEAD`
  current_origin=`git remote`
  if [ current_origin = "origin" -o "$current_branch" = "refs/heads/main" -o "$current_branch" = "refs/heads/main" ]
  then
    echo "You are not authorized to push/commit directly to main/main branch in origin remote. Push from a new branch and make the PR.";
    exit 1;
  fi
}
