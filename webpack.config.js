const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test:  /\.(js|jsx)$/,
        include: ['index.js', 'src', 'example/assets', 'example/src'].map(
          name => path.resolve(__dirname, name)
        ),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!raw-loader'
      },
      {
        test: /\.svg$/,
        include: path.join(__dirname, 'src/images'),
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.png$/,
        include: path.join(__dirname, 'src/images'),
        loader: 'url-loader?mimetype=image/png'
      },
      {
        test: /\.jpg$/,
        include: path.join(__dirname, 'src/images'),
        loader: 'url-loader?mimetype=image/jpg'
      },
      {
        test: /\.gif$/,
        include: path.join(__dirname, 'src/images'),
        loader: 'url-loader?mimetype=image/gif'
      }
    ]
  }
};
