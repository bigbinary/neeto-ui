[![NPM](https://img.shields.io/npm/v/@bigbinary/neetoui.svg)](https://www.npmjs.com/package/@bigbinary/neetoui)
[![BuildStatus](https://neeto-engineering.neetoci.com/badges/neeto-ui/workflows/default.svg)](https://neeto-engineering.neetoci.com/projects/neeto-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**neetoUI** is the library that drives the experience in all
[neeto products](https://neeto.com/) built at
[BigBinary](https://www.bigbinary.com).

## Installation

```
yarn add @bigbinary/neetoui
```

This would install `neetoui` package inside your application. Starting `3.0.x`,
neetoUI stylesheet has been separated from the bundle. To get the styles
working, please import the neetoUI stylesheet to your main `scss` entry point.

```scss
@import "@bigbinary/neetoui";
```

## Dependencies

**neetoUI** has few peer dependencies which are required to use neetoUI
properly. Make sure you install all the peerDependencies mentioned in the
[package.json](./package.json)

### `react-toastify`

neetoUI depends on `react-toastify` for Toasters, so the styles for toaster must
be imported to your main `scss` entry point.

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

### `formik`

To make form handling easier with neetoUI, we provide Formik binding with
neetoUI components. To know about Formik, ref the
[official documentation](https://formik.org/docs/overview).

## Usage

neetoUI exports all it’s component as named exports. You can individually import
necessary components in the following way:

```jsx
import { Button, Tooltip } from "@bigbinary/neetoui";
```

If you need access to an object that contains references to all the components
you can do a wildcard import. This way, you can render dynamic components from
neetoUI.

```jsx
import React from "react";
import * as NeetoUI from "@bigbinary/neetoui";

export default function index() {
  const Button = NeetoUI.Button;

  // get a random component
  const componentName = Math.random() > 0.5 ? "Badge" : "Avatar";
  const MyDynamicComponent = NeetoUI[componentName];

  return (
    <div>
      <Button />
      <MyDynamicComponent />
    </div>
  );
}
```

### Formik

neetoUI formik exports all its component as named exports. You can individually
import necessary components in the following way:

```jsx
import { Input } from "@bigbinary/neetoui/formik";
```

Available components in neetoUI formik:

- Input
- Radio
- Button
- Form
- ActionBlock
- Select
- Switch
- Textarea
- CheckBox
- BlockNavigation
- TreeSelect
- Slider

You can refer the
[formik folder](https://github.com/bigbinary/neeto-ui/tree/main/src/formik) to
check for latest Formik components.

In order to use the neetoUI formik components, you need to wrap your form with
the `Form` component.

```jsx
import * as Yup from "yup";
import { Form } from "@bigbinary/neetoui/formik";

<Form
  formikProps={{
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values, formikBag) => {
      console.log(values, formikBag);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
  }}
  className="w-full space-y-6"
>
  {props => {
    return (
      <>
        <Input {...props} label="Name" name="name" />
        <Input {...props} label="Email" name="email" />
        <Button label="Submit" type="submit" style="primary" />
      </>
    );
  }}
</Form>;
```

In case, you wish not to pass `children` as a function, you can use the
following syntax:

```jsx
import * as Yup from "yup";
import { Form } from "@bigbinary/neetoui/formik";

<Form
  formikProps={{
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values, formikbag) => {
      console.log(values, formikbag);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
  }}
  className="w-full space-y-6"
>
  <>
    <Input {...props} label="Name" name="name" />
    <Input {...props} label="Email" name="email" />
    <Button label="Submit" type="submit" style="primary" />
  </>
</Form>;
```

The `Form` component accepts the following props:

- `formikProps`: Formik props object. You can pass `initialValues`,
  `validationSchema`, `onSubmit` etc. as props to the `Form` component.
- `children`: You can pass a function as `children` to the `Form` component. The
  function will receive the formik props object as an argument. Or you can
  directly pass the `children` inside the `Form` component.
- `className`: You can use this prop to provide a custom class to the form.
- `formProps`: Form props object. You can pass `className`, `style` etc. as
  props to the `Form` component.
- `scrollToErrorField`: To specify whether scroll to error field on clicking
  submit button is enabled or not. Default value is false.

---

## Development

Install all the dependencies by executing following command.

```
yarn
```

You can create new components in `src/components` and export them from
`src/index.js`.

Running the `yarn storybook` command starts a storybook app. Use this
application to test out changes and see how your component behaves in the
storybook for **neetoUI**

- To see if tests associated with your components pass run `yarn test`.
  > Tests will fail if there are some warnings or errors in the console.
- To see if **neetoUI** gets built and bundled after changes run `yarn bundle`.
- To see if the storybook gets built run `yarn build`.

Note that nothing in the `stories` folder will be bundled with **neetoUI**.

# Building and releasing.

The `@bigbinary/neetoui` package gets published to NPM when we merge a PR with
`patch`, `minor` or `major` label to the `main` branch. The `patch` label is
used for bug fixes, `minor` label is used for new features and `major` label is
used for breaking changes. You can checkout the `Create and publish releases`
workflow in GitHub Actions to get a live update.

In case if you missed to add the label, you can manually publish the package.
For that first you need to create a PR to update the version number in the
`package.json` file and merge it to the `main` branch. After merging the PR, you
need to create a
[new github release](https://github.com/bigbinary/neeto-ui/releases/new) from
main branch. Whenever a new release is created with a new version number, the
github actions will automatically publish the built package to npm. You can
checkout the `Publish to npm` workflow in GitHub Actions to get a live update.

Please note that before publishing the package, you need to verify the
functionality in some of the neeto web-apps locally using `yalc` package
manager. The usage of yalc is explained in this video:
https://youtu.be/F4zZFnrNTq8

## Documentation

Read the docs here

https://neeto-ui.neeto.com

## Other Libraries

- [neetoIcons](https://github.com/bigbinary/neeto-icons): **NeetoIcons** is the
  official icons library from BigBinary.
- [neetoEditor](https://github.com/bigbinary/neeto-editor-tiptap):
  **NeetoEditor** is a prose-mirror based rich-text editor used at BigBinary.
