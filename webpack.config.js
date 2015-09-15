var path = require('path');
var webpack = require('webpack');
var merge = require('lodash/object/merge');

var AUTOPREFIXER_BROWSERS = [
  'Android >= 4',
  'iOS >= 6'
];

var commonConfig = {
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.gif/,
      loader: 'url-loader?limit=10000&mimetype=image/gif'
    }, {
      test: /\.jpg/,
      loader: 'url-loader?limit=10000&mimetype=image/jpg'
    }, {
      test: /\.png/,
      loader: 'url-loader?limit=10000&mimetype=image/png'
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  },
  postcss: [
    require('autoprefixer-core')(AUTOPREFIXER_BROWSERS)
  ]
};

var clientConfig = merge({}, commonConfig, {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    ...commonConfig.plugins,
    ...[
      new CommonsChunkPlugin({
        name: "common",
        filename: "common.js",
        minChunks: 2
      })
    ]
  ],
  externals: {
    'zepto': 'window.$',
    'lodash': 'window.lodash',
    'react': 'window.React',
    'react-router': 'window.ReactRouter',
    'framework7': 'window.Framework7',
    'dom7': 'window.Dom7',
    'pace': 'window.Pace'
  },
  module: {
    loaders: [...commonConfig.module.loaders]
  }
});

module.exports = clientConfig;
