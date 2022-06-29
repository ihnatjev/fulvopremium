import React from 'react';
import styled from 'styled-components';

import StyledContainer from './Container';
import StyledLink from './Link';
import StyledImage from './Image';

import brand from '../assets/images/brand.svg';


const StyledHeader = styled.header``;

const StyledNav = styled.nav`
  display: flex;

  a {
    margin-right: 10px;
  }
`;

const StyledBrandLink = styled(StyledLink)`
  display: inline-flex;
  text-decoration: none;
`;

const StyledBrandImage = styled(StyledImage)`
  height: 48px;
`;

const Header = () => (
  <StyledHeader>
    <StyledContainer>

      <StyledBrandLink to="/">
        <StyledBrandImage src={brand} />
      </StyledBrandLink>

      <StyledNav>
        <StyledLink to="/">Головна</StyledLink>
        <StyledLink to="/products">Продукти</StyledLink>
        <StyledLink to="/about">Про нас</StyledLink>
        <StyledLink to="/contact">Контакти</StyledLink>
      </StyledNav>

    </StyledContainer>
  </StyledHeader>
);

export default Header;
