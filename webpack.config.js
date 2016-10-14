var HTMLWebPackPlugin = require('html-webpack-plugin');
var HTMLWebPackPluginConfig = new HTMLWebPackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
})

module.exports = {
  devtool: 'eval',
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [HTMLWebPackPluginConfig]
}
