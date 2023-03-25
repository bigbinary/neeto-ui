[![NPM](https://img.shields.io/npm/v/@bigbinary/neetoui.svg)](https://www.npmjs.com/package/@bigbinary/neetoui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**neetoUI** is the library that drives the experience in all [neeto products](https://neeto.com/) built at [BigBinary](https://www.bigbinary.com).

## Installation

```
yarn add @bigbinary/neetoui
```

This would install `neetoui` package inside your application.
Starting `3.0.x`, neetoUI stylesheet has been separated from the bundle. To get the styles working, please import the neetoUI stylesheet to your main `scss` entry point.

```scss
@import "@bigbinary/neetoui";
```

**neetoUI** has few peer dependencies which are required to use neetoUI properly. Install the peer dependencies using the below command:

```
yarn add react-toastify@9.0.1 formik@2.2.0 react-router-dom@5.2.0
```

**neetoUI** depends on `react-toastify` for Toasters, so the styles for toaster must be imported to your main `scss` entry point.

```scss
@import "react-toastify/dist/ReactToastify.min.css";
```

Also make sure to include `<ToastContainer />` in your application.

```jsx
import React from "react";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      // Other children
    </>
  );
};
```

## Development

Install all the dependencies by executing following command.

```
yarn
```

You can create new components in `src/components` and export them from `src/index.js`.

Running the `yarn storybook` command starts a storybook app. Use this application to test out changes and see how your component behaves in the storybook for **neetoUI**

- To see if tests associated with your components pass run `yarn test`.
- To see if **neetoUI** gets built and bundled after changes run `yarn bundle`.
- To see if the storybook gets built run `yarn build`.

Note that nothing in the `stories` folder will be bundled with **neetoUI**.

# Building and releasing.

The `@bigbinary/neetoui` package gets published to NPM when we
merge a PR with `patch`, `minor` or `major` label to the `main` branch. The
`patch` label is used for bug fixes, `minor` label is used for new features and
`major` label is used for breaking changes. You can checkout the
`Create and publish releases` workflow in GitHub Actions to get a live update.

In case if you missed to add the label, you can manually publish the package.
For that first you need to create a PR to update the version number in the
`package.json` file and merge it to the `main` branch. After merging the PR, you
need to create a
[new github release](https://github.com/bigbinary/neeto-ui/releases/new)
from main branch. Whenever a new release is created with a new version number,
the github actions will automatically publish the built package to npm. You can
checkout the `Publish to npm` workflow in GitHub Actions to get a live update.

Please note that before publishing the package, you need to verify the
functionality in some of the neeto web-apps locally using `yalc` package
manager. The usage of yalc is explained in this video:
https://youtu.be/QBiYGP0Rhe0

## Documentation

Read the docs here

https://neeto-ui.neeto.com

## Other Libraries

- [neetoIcons](https://github.com/bigbinary/neeto-icons): **NeetoIcons** is the official icons library from BigBinary.
- [neetoEditor](https://github.com/bigbinary/neeto-editor-tiptap): **NeetoEditor** is a prose-mirror based rich-text editor used at BigBinary.
