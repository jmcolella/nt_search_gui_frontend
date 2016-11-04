var webpack = require('webpack');

module.exports = function ( config ) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'test.webpack.js' 
    ],
    preprocessors: {
      'test.webpack.js' : ['webpack'] 
    },
    reporters: ['dots'],
    webpack: {
      module: {
        loaders: [
          { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' } 
        ] 
      },
      watch: true 
    },
    webpackServer: {
      noInfo: true 
    }
  });
};
