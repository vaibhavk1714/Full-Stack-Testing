const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: {
    index: './client/js/test.js',   // Entry for index.js
    other: './client/js/test1.js',   // Entry for other.js
  },
  output: {
    filename: 'js/[name].bundle.js',    // Dynamic output filenames based on entry names
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
        include: path.resolve('client/styles'), // Adjust the path
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
        include: path.resolve('client/images'), // Adjust the path
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css', // Output CSS to a separate styles folder
    }),
    new HtmlWebpackPlugin({
      template: './client/pages/index.html',
      filename: 'pages/index.html',    // Output filename for index.html
      chunks: ['index'],               // Include only the index entry's bundle
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
        new CopyWebpackPlugin({
            patterns: [
                { from: './client/images', to: './assets' } // Adjust the source and destination paths as needed
            ]
        })
  ],
};
