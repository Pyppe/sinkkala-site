module.exports = {
  siteMetadata: {},
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sinkkala Bed and Breakfast',
        short_name: 'Sinkkala BB',
        start_url: '/',
        background_color: '#723419',
        theme_color: '#f8e9cc',
        display: 'minimal-ui',
        icon: './src/favicon.png'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-16461002-1',
        head: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
