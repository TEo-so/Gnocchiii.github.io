module.exports = {
  // Customize your site metadata:
  pathPrefix: `/`,
  siteMetadata: {
    title: `My Blog`,
    author: `Gnocchiii`,
    description: `存放个人博客和笔记`,
    social: [
      {
        name: `github`,
        url: `https://github.com/Gnocchiii`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
         basePath: `/`,
      },
    },
  ],
}
