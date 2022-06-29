import React from 'react';
import { Routes, Route } from 'react-router-dom';

import StyledContainer from '../../components/Container';

import ProductList from './ProductList';
import ProductItem from './ProductItem';

const Products = () => (
  <StyledContainer>
    <h2>Продукти</h2>

    <Routes>
      <Route index element={<ProductList />} />
      <Route path=":productId" element={<ProductItem />} />
    </Routes>

  </StyledContainer>
);

export default Products;
