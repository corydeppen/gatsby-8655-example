import { gql } from 'apollo-boost';
import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container, Table } from 'semantic-ui-react';

import Layout from 'components/layout';

const GET_POSTS = gql`
  query {
    blogPosts {
      id
      slug
      title
    }
  }
`;

const Posts = () => {
  return (
    <Layout>
      <Helmet>
        <title>Posts</title>
      </Helmet>
      <Container text style={{ marginTop: '7em' }}>
        <h1>Posts</h1>
        <Query query={GET_POSTS}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;
            return (
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell content="Title" />
                    <Table.HeaderCell content="Slug" />
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {data.blogPosts.map(({ id, slug, title }) => (
                    <Table.Row key={id}>
                      <Table.Cell>
                        <Link to={`/posts/${slug}/`}>{title}</Link>
                      </Table.Cell>
                      <Table.Cell>{slug}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            )
          }}
        </Query>
      </Container>
    </Layout>
  );
};

export default Posts;
