module.exports = {
  siteMetadata: {
    title: "Gatsby TODOS",
    description: "A simple todo app made with Gatsby",
    author: "Gonzalo Pozzo",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.ts$|\.tsx$/,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-firebase-typescript-todo-app`,
        short_name: `todos`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/gatsby-icon.png`,
      },
    },
  ],
};
