module.exports = {
  siteMetadata: {
    title: `Anthony Animba | Freelance Designer and Developer`,
    description: `Freelance web designer and developer based in London`,
    author: `@anthonyanimba`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `anthony-animba-portfolio`,
        short_name: `Anthony Animba Portfolio`,
        description: `Freelance web designer and developer based in London`,
        start_url: `/`,
        background_color: `#DDDDDD`,
        display: `standalone`,
        icon: `static/logo192.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`manrope\:200,300,400,500,600,700,800`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-Q01T2ZVXZ3"],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}
