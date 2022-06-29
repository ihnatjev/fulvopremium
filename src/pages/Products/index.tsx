import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from '../../components/Container';

import ProductList from './ProductList';
import ProductItem from './ProductItem';

const Products = () => (
  <Container>
    <h2>Products</h2>

    <Routes>
      <Route index element={<ProductList />} />
      <Route path=":productId" element={<ProductItem />} />
    </Routes>

  </Container>
);

export default Products;
