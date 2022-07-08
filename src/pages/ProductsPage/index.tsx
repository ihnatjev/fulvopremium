import { Routes, Route } from 'react-router-dom';

import Container from 'components/Container';

import ProductList from './ProductList';
import ProductItem from './ProductItem';

const ProductsPage = () => (
  <Container>
    <h2>Продукти</h2>

    <Routes>
      <Route index element={<ProductList />} />
      <Route path=":productId" element={<ProductItem />} />
    </Routes>

  </Container>
);

export default ProductsPage;
