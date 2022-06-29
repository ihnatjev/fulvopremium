import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from './Container';
import brand from '../assets/brand.svg';

const HeaderRoot = styled.header``;

const Nav = styled.nav`
  display: flex;

  a {
    margin-right: 10px;
  }
`;

const BrandLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
`;

const BrandImage = styled.img`
  height: 48px;
`;

const Header = () => (
  <HeaderRoot>
    <Container>

      <BrandLink to="/">
        <BrandImage src={brand} />
      </BrandLink>

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/credit">Credit</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </Nav>

    </Container>
  </HeaderRoot>
);

export default Header;
