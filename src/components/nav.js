import React from 'react';
import { Link } from 'gatsby';
import { Container, Image, Menu } from 'semantic-ui-react';

import logo from 'logo.png';

const Nav = ({ abbr }) => (
  <Menu
    borderless
    fixed="top"
    inverted
    style={{ backgroundColor: '#784E76', color: 'white' }}
  >
    <Container>
      <Menu.Item header>
        <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
        {abbr}
      </Menu.Item>
      <Menu.Item as={Link} to="/">
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/posts">
        Posts
      </Menu.Item>
    </Container>
  </Menu>
);

export default Nav;
