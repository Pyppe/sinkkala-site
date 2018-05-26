module.exports = {
  siteMetadata: {
    title: 'Sinkkala Bed and Breakfast',
    baseUrl: 'http://uusi.sinkkala.fi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-react-next', // For React 16 in Gatsby v1
  ],
}
