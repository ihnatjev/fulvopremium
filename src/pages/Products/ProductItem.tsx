import React from 'react';
import { useParams } from 'react-router-dom';

import SEO from '../../components/SEO';

const ProductItem = () => {
  const { productId } = useParams();

  return (
    <>
      <SEO title={productId} />

      <h3>Product ID: {productId}</h3>
    </>
  );
};

export default ProductItem;
