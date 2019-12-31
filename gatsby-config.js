module.exports = {
  siteMetadata: {
    title: "Gatsby TODOS",
    description: "A simple todo app made with Gatsby",
    author: "Gonzalo Pozzo",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.ts$|\.tsx$/,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
