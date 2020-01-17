const path = require('path');

require('@babel/polyfill');

module.exports = {
  entry: {
    main: [
      "@babel/polyfill",
      "./src/index.js",
      "./src/assets/scss/main.scss"
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            esModule: false,
            name: "[name].[ext]",
            outputPath: "images"
          }
        }
      },
      {
        test: /\.njk$/,
        use: [
          {
            loader: 'simple-nunjucks-loader',
            options: {
              assetsPaths: ['src/assets/'],
              searchPaths: [
                './src/views/'
              ],
            }
          }
        ]
      }
    ]
  }
};