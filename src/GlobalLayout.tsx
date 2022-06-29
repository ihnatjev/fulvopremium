import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

const GlobalLayoutRoot = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Main = styled.main``;

const GlobalLayout = () => (
  <GlobalLayoutRoot>
    <Header />

    <Main>
      <Outlet />
    </Main>

    <Footer />
  </GlobalLayoutRoot>
);

export default GlobalLayout;
