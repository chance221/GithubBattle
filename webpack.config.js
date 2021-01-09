const path = require('path') //since we need to access the directory we need to use path from npm
const HtmlWebPackPlugin = require('html-webpack-plugin')

 //We then state where the entry of our application is, the location of where the bundeled file will be output, Webpack will then reference this index_bundle.js
  //The modules  section sets up the rules of what to do with certain types of files. Using regex below its stating that all the js files need to be compiled using babel-loader
  //All the css files need to first be loaded in and then the styles applied to the referencing components (notice this is an array, and the occurance needs to be backwards)


  module.exports = {
 
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
      rules: [
        { test:/\.(js)$/, use: 'babel-loader' },
        { test:/\.css$/, use: [ 'style-loader', 'css-loader' ]}
      ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin({
      template: 'app/index.html'
    })
  ]
}