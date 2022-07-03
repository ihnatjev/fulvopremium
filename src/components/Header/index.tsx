import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import Container from 'components/Container';

import { ReactComponent as Brand } from './brand.svg';

const HeaderRoot = styled.header``;

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

const BrandLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
`;

const BrandImage = styled(Brand)`
  height: 48px;
`;

const Header = () => (
  <HeaderRoot>
    <Container>

      <BrandLink to="/">
        <BrandImage />
      </BrandLink>

      <Nav>
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/products">Продукти</NavLink>
        <NavLink to="/about">Про нас</NavLink>
        <NavLink to="/contact">Контакти</NavLink>
      </Nav>

    </Container>
  </HeaderRoot>
);

export default Header;
