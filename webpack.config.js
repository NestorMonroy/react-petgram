const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebpackPwaManifestPlugin({
      filename: 'manifest.webmanifest',
      name: "Pettagram - Tu app social de mascotas",
      short_name: "Pettagram",
      description:
        "Con Petgram puedes encontrar y subir fotos de animales domésticos.",
      background_color: "#ffffff",
      theme_color: "#2196f3",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: path.resolve("src/assets/icon1.png"),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          purpose: "maskable",
          ios: true,
        },
        {
          src: path.resolve("src/assets/icon1.png"),
          size: "1024x1024", // you can also use the specifications pattern
        },
        {
          src: path.resolve("src/assets/icon1.png"),
          size: "1024x1024",
          purpose: "maskable",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
