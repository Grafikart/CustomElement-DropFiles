export default (config, env, helpers) => {
  delete config.entry.polyfills;
  config.output.filename = "[name].js";
  config.resolve.alias["react"] = "preact/compat"
  config.resolve.alias["react-dom/test-utils"] = "preact/test-utils"
  config.resolve.alias["react-dom"] = "preact/compat"

  let { plugin } = helpers.getPluginsByName(config, "ExtractTextPlugin")[0];
  plugin.options.disable = true;

  if (env.production) {
    config.output.libraryTarget = "umd";
  }
};
