import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Footer from 'components/footer';
import Nav from 'components/nav';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            abbr
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          defaultTitle={data.site.siteMetadata.title}
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
        />
        <Nav abbr={data.site.siteMetadata.abbr} />
        {children}
        <Footer />
      </>
    )}
  />
);

export default Layout;
