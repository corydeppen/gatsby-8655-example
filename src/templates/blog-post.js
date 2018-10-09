import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react'

import Layout from 'components/layout';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title} - Posts</title>
      </Helmet>
      <Container text style={{ marginTop: '7em' }}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;
