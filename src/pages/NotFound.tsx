import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../components/Container';

const NotFound = () => (
  <Container>
    <h2>Not Found</h2>
    <p>Return to <Link to="/">Homepage</Link></p>
  </Container>
);

export default NotFound;
