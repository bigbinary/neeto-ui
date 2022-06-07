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
yarn add react-toastify@9.0.1 formik@2.2.0 react-router-dom@5.2.0 react-router-nav-prompt@0.4.1
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

You can create new components in the `lib/components` and export them from `lib/index.js`.

Running the `yarn storybook` command starts a storybook app. Use this application to test out changes. Note that nothing in the `stories` folder will be bundled with neetoUI.

## Building

neetoUI gets auto-published to npm on new commit to master. You can checkout the `publish` workflow in git actions to get a live update.

## Documentation

Read the docs here

https://neetoui.onrender.com

## Other Libraries

- [neetoIcons](https://github.com/bigbinary/neeto-icons): **NeetoIcons** is the official icons library from BigBinary.
- [neetoUtils](https://github.com/bigbinary/neeto-utils): **NeetoUtils** is a collection of react hooks and utility functions used at BigBinary.
