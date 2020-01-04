const HTMLWebpackPlugin     = require('html-webpack-plugin')
// const MiniCSSExtractPlugin  = require('mini-css-extract-plugin')
const { CleanWebpackPlugin }   = require('clean-webpack-plugin')
const ExtractTextPlugin     = require('extract-text-webpack-plugin')
const path = require('path');
const fs = require('fs')

function generateHtmlPlugins (templateDir, outputDir) {
  // Read files in template directory
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    // Create new HTMLWebpackPlugin with options
    return new HTMLWebpackPlugin({
      filename: `${outputDir}/${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
    })
  })
}

const distPath  = path.join(__dirname, process.env.ENV === 'production' ? 'build' : 'dist')
const PUBLIC    = 'public'

const htmlPages     = generateHtmlPlugins('./src/views/pages', 'pages')
const htmlElements  = generateHtmlPlugins('./src/views/elements', 'elements')

module.exports = {
  output: {
    path: distPath,
    publicPath: '/',
    filename: `${PUBLIC}/[name].[hash].js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { 
              minimize: process.env.ENV === 'production' 
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        use: [
          { 
            loader: "file-loader",
            options: { 
              esModule: false,
              outputPath: `${PUBLIC}/images`
            }
          }
        ]
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader:'css-loader?sourceMap' }, 
            {
              loader:'sass-loader', 
              options: {
                sourceMap: true
              }
            }
          ],
        })
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'html-loader',
            options: { 
              minimize: process.env.ENV === 'production' 
            }
          },
          {
            loader: 'ejs-html-loader',
            options: {
              title: 'The Ant: An Introduction',
              season: 1,
              episode: 9,
              production: process.env.ENV === 'production'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin(`${PUBLIC}/main.[hash].min.css`)
  ].concat(htmlPages).concat(htmlElements)
}