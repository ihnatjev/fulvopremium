import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

import Header from './components/Header';
import Footer from './components/Footer';

const StyledLayoutRoot = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  flex-grow: 1;
`;

const GlobalLayout = () => (
  <StyledLayoutRoot>
    <Header />

    <StyledMain>
      <Outlet />
    </StyledMain>

    <Footer />
  </StyledLayoutRoot>
);

export default GlobalLayout;
