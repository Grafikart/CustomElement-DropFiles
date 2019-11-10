const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      /*
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /node_modules/,
        options: {
          configFile: resolve(__dirname, './tslint.json'),
          emitErrors: true,
          failOnHint: true,
          typeCheck: true
        }
      },
      */
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    index: './src/index.html'
  }
};
