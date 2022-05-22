const withOffline = require('next-offline')

module.exports = withOffline({
	globPatterns: ['static/**/*'],
  globDirectory: '.',
  i18n: {
    // all possible locales
    locales: ['en', 'pt-BR'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'pt-BR'
  },
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200
        }
      }
    }
  ],
  webpack(config) {
    config.node = {
      fs: "empty", // webpack4 era solution 
    };
    return config
   }
})