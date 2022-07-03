import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import Container from './Container';

const FooterRoot = styled.footer``;

const Nav = styled.nav`
  display: flex;

  a {
    margin-right: 10px;
    text-decoration: none;

    &.active {
      color: rgb(var(--color-charcoal-rgb));
    }
  }
`;

const Footer = () => (
  <FooterRoot>
    <Container>

      <Nav>
        <NavLink to="/partners">Партнери</NavLink>
        <NavLink to="/credit">Кредит</NavLink>
        <NavLink to="/privacy">Конфіденційність</NavLink>
        <NavLink to="/terms">Умови</NavLink>
      </Nav>

    </Container>
  </FooterRoot>
);

export default Footer;
