import React, { ReactNode } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

type LayoutProps = {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />

    {children}

    <Footer />
  </>
);

export default Layout;
