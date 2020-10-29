**NitroUI** is a component library from [BigBinary](https://www.bigbinary.com). Checkout the [online demo and documentation](https://nitroui.netlify.app).

## Installation

```
yarn add https://github.com/bigbinary/nitroui.git
```

NitroUI relies on [Remixicons](https://remixicon.com/) for it's icons. 
Install it by doing 
```
yarn add remixicon
```
Import the styles in your `application.scss` file by doing
```
import 'remixicon/fonts/remixicon.css'
```

## Development
Install all the dependencies by running:
```
yarn
```
You can create new components in the `lib/components` and export them from `lib/index.js`.

Running the `yarn start` command starts a CRA app which resides in `src` folder. Use this application to test out changes. Note that nothing in the `src` folder will be bundled with NitroUI.

## Building
Run `yarn build` to build new bundle files and **increment the version number** in `package.json`. Make sure to commit and push the changes to Github. In the host application, run `yarn add https://github.com/bigbinary/nitroui.git` to update it to the latest version.

## Documentation

Read the docs here: https://nitroui.netlify.app.


## About BigBinary

![BigBinary](https://raw.githubusercontent.com/bigbinary/bigbinary-assets/press-assets/PNG/logo-light-solid-small.png?raw=true)

NitroUI is maintained by [BigBinary](https://www.BigBinary.com). 
BigBinary is a software consultancy company. 
We build web and mobile applications using Ruby on Rails, React.js, React Native and Node.js.
