module.exports = {
  siteMetadata: {
    siteUrl: "https://www.dudekhome.com",
    title: "Dudekhome",
  },
  plugins: [
    /*
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "www.wp.pl",
      },
    },
    */
    "gatsby-plugin-modal-routing",
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    /*
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
    */
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway`,
          `Raleway\:300,400,400i,700`,
        ],
        display: 'swap'
      }
    }
  ]
};
