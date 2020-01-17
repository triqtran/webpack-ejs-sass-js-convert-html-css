const path = require("path");
const config = require("./webpack.config");
const merge = require("webpack-merge");
const { pages } = require('./pages');
// const MiniCssExtractPlugin 

module.exports = merge(config, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: pages,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
