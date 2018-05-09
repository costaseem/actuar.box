const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');

const port = 3333;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  open: `http://localhost:${port}`,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}).listen(port, 'localhost', (err) => {

  if (err) {
    console.log(err);
  }

  console.log(`Listening at port ${port}`);
});
