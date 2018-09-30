module.exports = {
  siteMetadata: {
    abbr: `8655`,
    title: `Gatsby 8655 Example`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-apollo-client`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'CMS',
        // This is field under which it's accessible
        fieldName: 'cms',
        // Url to query from
        url: 'https://api-euwest.graphcms.com/v1/cjjr1at6d0xb801c3scjrm0l0/master',
      },
    },
  ],
};
