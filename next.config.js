const Dotenv = require("dotenv-webpack");

// module.exports = {
//   distDir: "build",
//   env: {
//     api_url: "http://woodbox.test/api",
//   },
// };
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },
  env: {
    api_url: process.env.API_URL,
  },
};
