module.exports = {
  env: {
    BASE_URL: "https://sortinghat.vercel.app",
  },
  optionalCatchAll: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};
