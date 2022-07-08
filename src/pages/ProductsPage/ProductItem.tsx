import { useParams } from 'react-router-dom';

import SEO from 'components/SEO';

const ProductItem = () => {
  const { productId } = useParams();

  return (
    <>
      <SEO title={productId} />

      <h4>Product ID: {productId}</h4>
    </>
  );
};

export default ProductItem;
