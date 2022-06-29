import React from 'react';
import { useParams } from 'react-router-dom';

const ProductItem = () => {
  const { productId } = useParams();

  return (
    <h3>Product ID: {productId}</h3>
  );
};

export default ProductItem;
