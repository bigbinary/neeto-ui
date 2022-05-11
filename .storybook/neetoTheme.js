import { create } from '@storybook/theming';
import neetoLogo from './neetoLogo.svg';


export default create({
  base: 'light',

  colorPrimary: '#1b1f23',
  colorSecondary: '#1b1f23',

  // UI
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 12,

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#49545c',
  barSelectedColor: '#1b1f23',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'neeto',
  brandUrl: 'https://neeto.com/',
  brandImage: neetoLogo,
});