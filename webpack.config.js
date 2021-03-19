const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const path = require("path");

module.exports = {
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebpackPwaManifestPlugin({
      filename: "manifest.webmanifest",
      name: "Pettagram - Tu app social de mascotas",
      short_name: "Pettagram",
      description:
        "Con Petgram puedes encontrar y subir fotos de animales domésticos.",
      background_color: "#ffffff",
      theme_color: "#2196f3",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      scope: "/",
      icons: [
        {
          src: path.resolve("src/assets/icon2.jpg"),
          sizes: [96, 144, 128, 180, 192, 256, 384, 512], // multiple sizes
          ios: true,
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://(res.cloudinary.com|images.unsplash.com)"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPattern: new RegExp("https://petgram-nestor.vercel.app"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
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
