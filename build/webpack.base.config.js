const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "../src/client-entry.js")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /(\.js$)|(\.vue$)/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "vue-style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js",
    chunkFilename: "assets/js/[name].js"
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/styles.css"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};

module.exports = config;
