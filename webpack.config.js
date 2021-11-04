const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
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
  devServer: {
    static: {
        directory: __dirname + '/public',
    },
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 8080,
    hot: true,
    open: true,
    proxy: {
        '/**': 'http://localhost:3000',
    },
    historyApiFallback : true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: __dirname + '/client/index.html',
    filename: 'index.html',
  })],
}