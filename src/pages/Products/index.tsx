import { Routes, Route } from 'react-router-dom';

import StyledContainer from 'components/Container';
import StyledHeading2 from 'components/Heading2';

import ProductList from './ProductList';
import ProductItem from './ProductItem';

const Products = () => (
  <StyledContainer>
    <StyledHeading2>Продукти</StyledHeading2>

    <Routes>
      <Route index element={<ProductList />} />
      <Route path=":productId" element={<ProductItem />} />
    </Routes>

  </StyledContainer>
);

export default Products;
