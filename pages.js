const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const datas = require('./src/datas/index');

const renderPage = './src/views/';

const pages = glob.sync('**/*.njk', {
  cwd: path.join(process.cwd(), renderPage),
  root: '/',
}).map(page => { 
  const name = page.substring(page.lastIndexOf('/') + 1, page.lastIndexOf('.'));
  const PAGE = page.includes('.njk') ? page.replace('.njk', '.html') : page;
  console.log(`Data ${name}: ${JSON.stringify(datas[name])}`);
  const renderPlugin = {
    filename: PAGE,
    template: `${renderPage}${page}`,
    templateParameters: {
      basePath: path.resolve(__dirname, renderPage),
      ...datas[name]
    }
  }
  const options = process.env.NODE_ENV == 'development' ? renderPlugin 
                  : {
                    ...renderPlugin,
                    minify: {
                      removeAttributeQuotes: true,
                      collapseWhitespace: true,
                      removeComments: true
                    }
                  } 
  return new HtmlWebpackPlugin(options)
});

module.exports = {
  pages
};