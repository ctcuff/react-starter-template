const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  plugins: [
    new ESLintPlugin(),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      title: 'React App'
    })
  ],
  target: 'web',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: false,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx?)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg)/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
