```hint|directive
To use NeetoUI, you need a recent version of [React.js](https://react.org/) installed (version 16.13.1+ recommended).
```

## Installation

To install NeetoUI via yarn, use this command.

```code
yarn add @bigbinary/neetoui
```

For other installation methods, refer [our official npm page](https://www.npmjs.com/package/@bigbinary/neetoui).

NeetoUI has declared some packages as its peer-dependency to avoid version conflicts. Even though they won't be installed by default by the above command, they are expected to be loaded when app is running (_i.e. they are expected to be pre-installed_). If you encounter any error, try installing them manually.

```code
yarn add "sass@^1.35.1" "formik@^2.2.0" "react@^16.13.1" "react-dom@^16.13.1" "react-router-dom@^5.2.0" "react-router-nav-prompt@^0.4.1" "react-toastify@^6.0.9"
```

NeetoUI depends on [Remixicons](https://remixicon.com) for all it's icons. You're free to include it by adding a CDN link, installing package via npm or loading the css file manually. Refer [their guideline](https://github.com/Remix-Design/remixicon#usage) for including [Remixicons](https://remixicon.com) in your project.
