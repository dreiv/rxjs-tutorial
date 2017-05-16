
module.exports = {
  entry: {
    app: './main'
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['ts', 'js']
  }
};