const path = require('path');
module.exports = {
  entry: './test.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    library: 'Reactivity',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public'
  }
};