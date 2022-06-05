module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function(config, env) {
      const overridedConfig = {
        ...config,
        resolve: {
          ...config.resolve,
          fallback: {
              ...config.resolve.fallback,
              fs: false,
              net: false,
              stream: false,
              crypto: false,
              http: false,
              https: false,
              os: false,
              url: false
          }
        }
      }
      return overridedConfig;
    }
  }

/* config-overrides.js */

// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     return config;
//   }