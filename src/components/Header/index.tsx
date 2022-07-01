import styled from '@emotion/styled';

import StyledContainer from 'components/Container';
import StyledLink from 'components/Link';
import StyledImage from 'components/Image';

import brand from './brand.svg';

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
