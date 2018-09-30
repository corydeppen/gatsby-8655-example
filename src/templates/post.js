import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';

import Layout from 'components/layout';

const BlogPost = ({ data }) => {
  const post = data.cms.blogPost;
  return (
    <Layout>
      <Helmet>
        <title>{post.title} - Posts</title>
      </Helmet>
      <Container text style={{ marginTop: '7em' }}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.post }} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($id: ID!) {
    cms {
      blogPost(where:{id: $id}){
        id
        post
        slug
        title
      }
    }
  }
`;

export default BlogPost;
