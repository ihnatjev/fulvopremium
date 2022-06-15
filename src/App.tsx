import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Layout from './Layout';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => (
  <>
    <GlobalStyle />

    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  </>
);

export default App;
