const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode:"production",
  entry: {
    index: './client/js/test.js',   // Entry for index.js
    other: './client/js/test1.js',   // Entry for other.js
  },
  output: {
    filename: 'js/[name].bundle.js',    // Dynamic output filenames based on entry names
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './client/pages/index.html',
      filename: '/pages/index.html',    // Output filename for index.html
      chunks: ['index'],         // Include only the index entry's bundle
    }),
    new HtmlWebpackPlugin({
      template: './client/pages/about.html',
      filename: '/pages/about.html',    // Output filename for about.html
      chunks: ['other'],         // Include only the other entry's bundle
    }),
    new HtmlWebpackPlugin({
        template: './client/pages/afterlogin.html',
        filename: '/pages/afterlogin.html',    // Output filename for about.html
        chunks: ['index'],         // Include only the other entry's bundle
    }),
    new HtmlWebpackPlugin({
        template: './client/pages/benefits.html',
        filename: '/pages/benefits.html',    // Output filename for about.html
        chunks: ['other'],         // Include only the other entry's bundle
      }),
      new HtmlWebpackPlugin({
        template: './client/pages/features.html',
        filename: '/pages/features.html',    // Output filename for about.html
        chunks: ['other'],         // Include only the other entry's bundle
      }),
      new HtmlWebpackPlugin({
        template: './client/pages/indexlog.html',
        filename: '/pages/indexlog.html',    // Output filename for about.html
        chunks: ['other'],         // Include only the other entry's bundle
      }),
      new HtmlWebpackPlugin({
        template: './client/pages/login.html',
        filename: '/pages/login.html',    // Output filename for about.html
        chunks: ['other'],         // Include only the other entry's bundle
      }),

    // Add similar HtmlWebpackPlugin instances for other HTML files
  ],
};
