import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import Container from 'components/Container';

import { ReactComponent as Brand } from './brand.svg';
import { ReactComponent as KyivstarIcon } from './kyivstar.svg';

const HeaderRoot = styled.header`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
`;

const BrandImage = styled(Brand)`
  height: 48px;
`;


const Nav = styled.nav`
  display: flex;

  a {
    margin-left: 5px;
    margin-right: 5px;
    text-decoration: none;

    &.active {
      color: rgb(var(--color-charcoal-rgb));
    }
  }
`;

const ContactPhone = styled.div`
  display: flex;
`;

const Phone = styled.div`
  margin-left: 16px;
`;

const PhoneNumber = styled.div`
  font-size: 1.5rem;
  font-family: var(--heading-font-family);
  font-weight: var(--heading-font-weight);

  line-height: 1;
`;

const PhoneLabel = styled.div`
  color: rgb(var(--color-white-rgb));
  background-color: rgb(var(--color-bud-green-rgb));

  font-size: 0.75rem;
  font-family: var(--heading-font-family);
  font-weight: var(--heading-font-weight);

  text-transform: lowercase;

  line-height: 1.5;

  display: inline-flex;
  padding-left: 10px;
  padding-right: 10px;
`;

const Header = () => (
  <HeaderRoot>
    <HeaderContainer>

      <BrandLink to="/">
        <BrandImage />
      </BrandLink>

      <Nav>
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/products">Продукти</NavLink>
        <NavLink to="/about">Про нас</NavLink>
        <NavLink to="/contact">Контакти</NavLink>
      </Nav>

      <ContactPhone>
        <KyivstarIcon />
        <Phone>
          <PhoneNumber>+38 (067) 522 03 20</PhoneNumber>
          <PhoneLabel>Цілодобово</PhoneLabel>
        </Phone>
      </ContactPhone>

    </HeaderContainer>
  </HeaderRoot>
);

export default Header;
