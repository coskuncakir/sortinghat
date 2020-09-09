module.exports = {
  env: {
    BACKEND_API: "https://www.potterapi.com/v1",
    AUTH_KEY: "$2a$10$rvTTYO1dkD.rpNvHzDChduDeuVN205pJa4iE5/Qv7CF2sWcs7ewvK",
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
