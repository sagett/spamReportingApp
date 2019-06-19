const webpack = require('webpack');
const devServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config');
const port = process.env.PORT || 4444;

new devServer(webpack(webpackConfig), {
  publicPath: '/',
  contentBase: 'src/app'
}).listen(port, 'localhost', (err, result) => {
  if (err) console.log(err);
  else {
    console.log(`Dev Server running on localhost:${port}`);
  }
});
