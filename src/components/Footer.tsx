import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from './Container';

const FooterRoot = styled.footer``;

const Nav = styled.nav`
  display: flex;

  a {
    margin-right: 10px;
  }
`;

const Footer = () => (
  <FooterRoot>
    <Container>
      <Nav>
        <Link to="/partners">Partners</Link>
        <Link to="/credit">Credit</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </Nav>
    </Container>
  </FooterRoot>
);

export default Footer;
