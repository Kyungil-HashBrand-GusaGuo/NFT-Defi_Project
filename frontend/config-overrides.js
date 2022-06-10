module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function(config, env) {
      const overridedConfig = {
        ...config,
        plugins: [
          // Work around for Buffer is undefined:
          // https://github.com/webpack/changelog-v5/issues/10
          new webpack.ProvidePlugin({
              Buffer: ['buffer', 'Buffer'],
          }),
      ],
        resolve: {
          extensions:[ '.ts', '.js' ],
          ...config.resolve,
          fallback: {        
              ...config.resolve.fallback,
              "buffer": require.resolve("buffer"),
              fs: false,
              net: false,
              stream: false,
              crypto: false,
              http: false,
              https: false,
              os: false,
              url: false,
              assert: false,
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