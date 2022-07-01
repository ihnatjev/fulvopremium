import { Link } from 'react-router-dom';

import SEO from 'components/SEO';
import Container from 'components/Container';

const NotFound = () => (
  <>
    <SEO title="Not Found" />

    <Container>
      <h2>Сторінка відсутня</h2>
      <p>
        Повернутися <Link to="/">на головну</Link>
      </p>
    </Container>
  </>
);

export default NotFound;
