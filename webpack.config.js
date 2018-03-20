const { join } = require('path')

module.exports = {

  // Pick any source-map that does not require eval.
  // `cheap-source-map` gives the best speed/quality for development.
  devtool: 'cheap-source-map',

  entry: join(__dirname, 'src/index'),

  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',

    // Bundle absolute resource paths in the source-map,
    // so VSCode can match the source file.
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },

  resolve: {
    extensions: ['.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts-loader']
      }
    ]
  }
}
