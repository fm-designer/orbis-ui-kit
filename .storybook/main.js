/** @type { import("@storybook/react-webpack5").StorybookConfig } */
const path = require("path");
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "./preset.js",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require("sass"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async config => {
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx", ".d.ts", ".less", ".css", ".json", ".svg");
    config.resolve.modules.push(path.resolve(__dirname, "../src/"));

    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
