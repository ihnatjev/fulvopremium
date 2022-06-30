import { useParams } from 'react-router-dom';

import SEO from '../../components/SEO';
import StyledHeading4 from '../../components/Heading4';

const ProductItem = () => {
  const { productId } = useParams();

  return (
    <>
      <SEO title={productId} />

      <StyledHeading4>Product ID: {productId}</StyledHeading4>
    </>
  );
};

export default ProductItem;
