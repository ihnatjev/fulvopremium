import React from 'react';
import styled from '@emotion/styled';

import StyledContainer from './Container';
import StyledLink from './Link';

const StyledFooter = styled.footer``;

const StyledNav = styled.nav`
  display: flex;

  a {
    margin-right: 10px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledContainer>
      <StyledNav>
        <StyledLink to="/partners">Партнери</StyledLink>
        <StyledLink to="/credit">Кредит</StyledLink>
        <StyledLink to="/privacy">Конфіденційність</StyledLink>
        <StyledLink to="/terms">Умови</StyledLink>
      </StyledNav>
    </StyledContainer>
  </StyledFooter>
);

export default Footer;
