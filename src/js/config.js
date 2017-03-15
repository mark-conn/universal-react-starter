// App configuration for both server and client side. For now it mostly defines the <head> values
module.exports = {
  API_URL: 'http://plu-wireframe.pludev.com/wp-json/wp/v2/',
  app: {
    head: {
      en: {
        defaultTitle: 'People Like Us',
        titleTemplate: '%s | People Like Us',
        meta: [
          {charset: 'utf-8'},
          {name: 'description', content: 'meta description'},
          {property: 'og:site_name', content: 'People Like Us'},
          {property: 'og:image', content: 'favicon-large'},
          {property: 'og:title', content: 'People Like Us'},
          {property: 'og:description', content: 'meta description'},
          {property: 'og:site', content: '@decodemtl'},
          {property: 'og:creator', content: '@PluDev'}
        ]
      },
      fr: {
        defaultTitle: 'People Like Us',
        titleTemplate: '%s | People Like Us',
        meta: [
          {charset: 'utf-8'},
          {name: 'description', content: 'meta description'},
          {property: 'og:site_name', content: 'People Like Us'},
          {property: 'og:image', content: 'favicon-large'},
          {property: 'og:title', content: 'People Like Us'},
          {property: 'og:description', content: 'meta description'},
          {property: 'og:site', content: '@Pludev'},
          {property: 'og:creator', content: '@PluDev'}
        ]
      }
    }
  }
}
