import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import GlobalLayout from './GlobalLayout';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Credit from './pages/Credit';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

const App = () => (
  <>
    <GlobalStyle />

    <Routes>
      <Route path="/" element={<GlobalLayout /> }>

        <Route index element={<Home />} />

        <Route path="products/*" element={<Products />} />

        <Route path="about" element={<About /> } />

        <Route path="contact" element={<Contact /> } />

        <Route path="partners" element={<Partners /> } />

        <Route path="credit" element={<Credit /> } />

        <Route path="privacy" element={<Privacy /> } />

        <Route path="terms" element={<Terms />} />

        <Route path='*' element={<NotFound />} />

      </Route>
    </Routes>
  </>
);

export default App;
