// This is no longer being used!!! (see package.json => "dev"). 
// Remove when I'm sure it's no longer needed.

// https://github.com/gaearon/react-hot-boilerplate/blob/master/server.js



var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://0.0.0.0:8080/');
});