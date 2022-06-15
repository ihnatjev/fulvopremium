import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => (
  <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
);

export default App;
