/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

/** @type {import('webpack').Configuration} */
module.exports = {
  plugins: [
    new ESLintPlugin({
      extensions: ['ts', 'tsx', 'js', 'jsx']
    }),
    new HotModuleReplacementPlugin({
      logLevel: 'warning'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      title: 'React App'
    })
  ],
  target: 'web',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: false,
    port: 9000,
    hot: true,
    useLocalIp: true,
    // Using 0.0.0.0 allows the project to be accessed by all
    // devices on the same network as the host
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        // Using asset/resource will emit a separate file and export the
        // url. If you want svg to be imported inline, separate svg into a
        // new rule and use asset/inline for (data URI) or asset/source (for code).
        test: /\.(png|jpg|svg)/,
        type: 'asset/resource'
      },
      {
        // Using asset/source will allow these file types to be imported as text.
        test: /\.(txt|md|fs|vs|frag|vert|glsl)/,
        type: 'asset/source'
      }
    ]
  },
  resolve: {
    // Files without an extension will be treated as one of these.
    // Note that webpack will go from left to right until the proper
    // extension is found.
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}
