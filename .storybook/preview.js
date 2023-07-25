/** @type { import('@storybook/react').Preview } */
import '../src/styles/index.scss';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const globalTypes = {
  dmt_isDark: {
    name: 'VTheme',
    description: 'Set class theme',
  },
  // color: {
  //   name: 'Color',
  //   description: 'Global theme for components',
  //   defaultValue: 'light',
  //   toolbar: {
  //     // The icon for the toolbar item
  //     icon: 'circlehollow',
  //     // Array of options
  //     items: [
  //       { value: 'blue', icon: 'circlehollow', title: 'blue' },
  //       { value: 'green', icon: 'circle', title: 'green' },
  //     ],
  //     // Property that specifies if the name of the item will be displayed
  //     showName: true,
  //   },
  // },
}
