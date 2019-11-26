module.exports = {
  siteMetadata: {
    title: "Peter Tao",
    author: "Peter Tao",
    description: "Hi, I'm Peter. I'm a software engineer. I love building apps, websites, and gadgets. Let me know how I can help you build something too!"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/me.jpeg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
