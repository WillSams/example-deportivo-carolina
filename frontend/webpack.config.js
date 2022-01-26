const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.SITE_PORT || 3000;

module.exports = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/img/favicon.ico'
    }),
  ];

  const rules = [
    // transpile vanilla js
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    // create source maps
    {
      test: /\.css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true
          }
        }
      ]
    }
  ];

  return {
    mode: process.env.NODE_ENV,
    module: { rules, },
    plugins,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',   // make direct links work
      filename: '[name].js',
    },
    devtool: 'inline-source-map',
    devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true
    }
  };
};