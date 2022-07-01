import SEO from 'components/SEO';
import Loader from 'components/Loader';
import StyledLink from 'components/Link';

import Product from './models/Product';

const ProductList = () => {
  const products: Array<Product> = [
    { id: '1', name: 'Fulvo 1' },
    { id: '2', name: 'Fulvo 2' }
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
            <StyledLink to={product.id}>
              {product.name}
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;