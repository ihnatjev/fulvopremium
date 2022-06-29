import React from 'react';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
import Container from '../components/Container';

const NotFound = () => (
  <>
    <SEO title="Not Found" />

    <Container>
      <h2>Not Found</h2>
      <p>Return to <Link to="/">Homepage</Link></p>
    </Container>
  </>
);

export default NotFound;
