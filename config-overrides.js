const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = function override(config, env) {
  // Add the WorkboxWebpackPlugin to generate the service worker
  console.log({env})
  if (env === 'production') {
    config.plugins.push(
      new WorkboxWebpackPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      })
    );
  }

  return config;
};
