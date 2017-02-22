module.exports = {  
  entry: "./src/Main.ts", 
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js',".json"]
  },
  module: {
    loaders: [
      {test: /\.tsx?$/, loader: "ts-loader"},
      {test: /\.json?$/, loader: "json-loader"}

    ]
  },
    devtool: 'source-map'
}