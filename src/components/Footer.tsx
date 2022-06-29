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
        <Link to="/partners">Партнери</Link>
        <Link to="/credit">Кредит</Link>
        <Link to="/privacy">Конфіденційність</Link>
        <Link to="/terms">Умови</Link>
      </Nav>
    </Container>
  </FooterRoot>
);

export default Footer;
