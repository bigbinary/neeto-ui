import './style.scss'
import '../lib/styles/index.scss'
// import './v1.scss'

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Foundation', ['Colors', 'Typography', 'Iconography', 'Helpers'], 'Components', 'Overlays', 'Layouts'],
    },
  },
}