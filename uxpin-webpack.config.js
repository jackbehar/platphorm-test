const path = require('path');

module.exports = {
  entry: {
    web_css: ['./src/stylesheets/index'],
    web: ['./src/javascripts/app/index'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
