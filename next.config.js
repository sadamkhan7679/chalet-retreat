const {i18n} = require('./next-i18next.config')

module.exports = {
  i18n,
  trailingSlash: true,
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    })
    return config
  },
}
