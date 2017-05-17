module.exports = {
  context: __dirname + '/src',
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  //To run development server
  devServer: {
    contentBase: __dirname + '/src'
  }
};