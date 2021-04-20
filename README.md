**NeetoUI** is the library that drives the experience in all Neeto products built at [BigBinary](https://www.bigbinary.com).

## Installation

```
yarn add @bigbinary/neetoui
```

NeetoUI relies on [Remixicons](https://remixicon.com/) for it's icons.
Install it by executing following command.

```
yarn add remixicon
```

Import the styles in your `application.scss` file by doing

```
import 'remixicon/fonts/remixicon.css'
```

## Development

Install all the dependencies by executing following command.

```
yarn
```

You can create new components in the `lib/components` and export them from `lib/index.js`.

Running the `yarn start` command starts a CRA app which resides in `src` folder. Use this application to test out changes. Note that nothing in the `src` folder will be bundled with NeetoUI.

## Building

NeetoUI gets auto-published to npm on new commit to master. You can checkout the `publish` workflow in git actions to get a live update.

## Documentation

Read the docs here: https://neeto-ui.netlify.app.

