import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from './Container';

import brand from '../assets/brand.svg';

const HeaderRoot = styled.header``;

const BrandLink = styled(Link)`
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

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

    </Container>
  </HeaderRoot>
);

export default Header;
