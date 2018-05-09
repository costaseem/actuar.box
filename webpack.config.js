const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const koutoSwiss = require('kouto-swiss');
const jeet = require('jeet');
const rupture = require('rupture');

const prod = process.argv.indexOf('-p') !== -1;

const config = {
  entry: !prod ? [
    'webpack-dev-server/client?http://0.0.0.0:3333', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    'react-hot-loader/patch', // RHL patch
    './src/main'
  ] : ['./src/main'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: !prod ? 'bundle.js' : '[chunkhash].bundle.js',
    publicPath: !prod ? '/' : './',
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]'
  },
  plugins: !prod ? [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:3333' })
  ] : [new HtmlWebpackPlugin({
    title: 'Actuar - Box',
    template: './src/template.html'
  })], // UglifyJsPlugin
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      components: path.resolve('src/components'),
      containers: path.resolve('src/containers'),
      core: path.resolve('src/core'),
      assets: path.resolve('src/assets'),
      router: path.resolve('src/router.js')
    },
    extensions: ['.js']
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.(styl|component.styl|container.styl)$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          {
            loader: 'stylus-loader',
            options: {
              use: [koutoSwiss(), jeet(), rupture()]
            }
          }
        ]
      }, 
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' }, 
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }, 
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
      { test: /\.webm$/, loader: 'url-loader?limit=10000&mimetype=video/webm' },
      { test: /\.mp4$/, loader: 'url-loader?limit=10000&mimetype=video/mp4' }
    ]
  }
};

config.plugins = config.plugins || [];
if (prod) {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: `'${'production'}'`
    }
  }));
} else {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: `'${''}'`
    }
  }));
}

module.exports = config;
