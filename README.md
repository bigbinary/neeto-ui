[![Netlify Status](https://api.netlify.com/api/v1/badges/1026fc08-b879-4046-a480-cb6a29055fe0/deploy-status)](https://app.netlify.com/sites/adoring-mayer-6eabd9/deploys)

**NeetoUI** is the library that drives the experience in all Neeto products built at [BigBinary](https://www.bigbinary.com).

## Installation

```
yarn add @bigbinary/neetoui
```

If the project uses **NeetoUI v1**, install [Remixicons](https://remixicon.com/) as **NeetoUI v1** relies on it. It can be installed by executing following command.

```
yarn add remixicon
```

Then import the Remixicon styles in your `application.scss` file by doing

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

Read the docs here

v1 : https://neetoui.netlify.app

v2 : https://neetoui-v2.netlify.app

## Theming

Theme override gist: [Override Gist](https://gist.github.com/goutham-subramanyam/d0619f8d089b10e7474a32478110ea0f)

## Other Libraries

- [neetoIcons](https://github.com/bigbinary/neeto-icons): **NeetoIcons** is the official icons library from BigBinary.
- [neetoUtils](https://github.com/bigbinary/neeto-utils): **NeetoUtils** is a collection of react hooks and utility functions used at BigBinary.