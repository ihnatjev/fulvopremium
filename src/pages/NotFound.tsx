import React from 'react';

import SEO from '../components/SEO';
import StyledContainer from '../components/Container';
import StyledText from '../components/Text';
import StyledLink from '../components/Link';

const NotFound = () => (
  <>
    <SEO title="Not Found" />

    <StyledContainer>
      <h2>Сторінка відсутня</h2>
      <StyledText>
        Повернутися <StyledLink to="/">на головну</StyledLink>
      </StyledText>
    </StyledContainer>
  </>
);

export default NotFound;
