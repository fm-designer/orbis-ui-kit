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
    backgrounds: { disable: true },
  },
};

export default preview;

export const globalTypes = {
  context_theme: {
    name: 'context-theme',
  },
}
