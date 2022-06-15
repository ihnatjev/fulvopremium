import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

const LayoutRoot = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;
`;

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps ) => (
  <LayoutRoot>
    <Header />

    <main>{children}</main>

    <Footer />
  </LayoutRoot>
);

export default Layout;
