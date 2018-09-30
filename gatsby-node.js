const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      cms {
        blogPosts {
          id
          slug
        }
      }
    }
  `);
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
  data.cms.blogPosts.forEach(({ id, slug }) => {
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id,
      },
    });
  });
};

// https://www.gatsbyjs.org/docs/add-custom-webpack-config/
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      // needed to prevent "require is not defined" error
      // rules: [
      //   {
      //     test: /\.mjs$/,
      //     include: /node_modules/,
      //     type: 'javascript/auto',
      //   },
      // ],
    },
    resolve: {
      extensions: ['.mjs', '.js', '.json'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
