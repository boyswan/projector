const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  entry: {
    app: ['babel-polyfill', './src/app.css', './src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: path.resolve(__dirname, 'public')
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx', '.css', '.svg']
  },
  module: {
    loaders: [
      { test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
      { test: /\.(glsl|frag|vert)$/, loader: 'glslify', exclude: /node_modules/ },
      { test: /\.(js|jsx|story)$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.svg$/, loaders: ['babel', 'react-svg'], include:  path.resolve(__dirname, 'src/svg') },
      { test: /\.(ttf|eot|jpg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [],
  postcss: function() {
    return [
      require('postcss-import')({ path: [ path.resolve(__dirname, 'src') ] }),
      require('postcss-cssnext')
    ];
  },
  // devtool: '#source-map'
};

switch(NODE_ENV) {
case 'production':
  config.plugins = config.plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') }}),
  ]);
  config.module.loaders = config.module.loaders.concat([
    { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?-url!postcss') }
  ]);
  break;
default:
  config.module.loaders = config.module.loaders.concat([
    { test: /\.css$/, loaders:['style', 'css?-url', 'postcss'] }
  ]);
  break;
}

module.exports = config;
