process.env.NODE_ENV = "development";
const { environment } = require("@rails/webpacker");

environment.loaders.get("sass").use.splice(-1, 0, {
  loader: "resolve-url-loader",
});
const envConf = environment.toWebpackConfig();

module.exports = {
  stories: ["../app/javascript/**/*.stories.js"],
  webpackFinal: config => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.filter(rule => !rule.test.test(".css")),
          ...envConf.module.rules.filter(
            rule => rule.test && rule.test.test(".css"),
          ),
        ],
      },
      resolve: {
        ...envConf.resolve,
        ...config.resolve,
        modules: [...config.resolve.modules, ...envConf.resolve.modules],
      },
      plugins: [...config.plugins, environment.plugins.get("MiniCssExtract")],
    };
  },
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
  ],
};
