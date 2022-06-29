import React from 'react';
import { Link } from 'react-router-dom';

import SEO from '../../components/SEO';
import Loader from '../../components/Loader';

import { ProductModel } from './models/ProductModel';

const ProductList = () => {
  const products: Array<ProductModel> = [
    { id: '1' },
    { id: '2' }
  ];

  const isLoading = false;

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <SEO title="Products" />

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={product.id}>
              {product.id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
