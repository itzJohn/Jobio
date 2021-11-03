const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  devServer: {
    static: {
        directory: __dirname + '/public'
    },
    compress: true,
    port: 8080,
    proxy: {
        '/': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
        {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                },
            },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader",
          ],
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: __dirname + '/client/index.html',
    filename: 'index.html',
    inject: 'body'
  })],
}