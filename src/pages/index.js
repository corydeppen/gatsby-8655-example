import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from 'react-emotion';
import { Header } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

import Layout from 'components/layout';

const Index = ({ data }) => {
  return (
    <Layout>
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1">{data.site.siteMetadata.title}</Header>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3>
                {node.frontmatter.title}{' '}
                <span
                  className={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        abbr
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default Index;
