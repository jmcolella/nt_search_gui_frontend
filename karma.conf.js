var webpack = require('webpack');

module.exports = function ( config ) {
  config.set({
    browsers: ['Chrome'],
    //    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'test.webpack.js' 
    ],
    preprocessors: {
      'test.webpack.js' : ['webpack'] 
    },
    reporters: ['verbose', 'junit'],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['airbnb'] } }
        ] 
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      watch: true
    },
    webpackServer: {
      noInfo: true 
    },
    logLevel: config.LOG_INFO,
    client: {
      captureConsole: true,
      mocha: {
        bail: true 
      }
    }
  });
};
