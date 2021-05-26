const siteConfig = require('./config.json')

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: siteConfig.title,
    description: siteConfig.description,
    author: siteConfig.author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.name,
        start_url: `/`,
        background_color: siteConfig.background_color,
        theme_color: siteConfig.theme_color,
        display: `standalone`,
        icon: `public/favicon.png`,
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          siteConfig.googleAnalytics
        ],
        gtagConfig: {
          cookie_expires: 0,
          send_page_view: true
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
