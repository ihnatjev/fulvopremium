import React from 'react';

import SEO from '../components/SEO';
import StyledContainer from '../components/Container';
import StyledHeading2 from '../components/Heading2';
import StyledText from '../components/Text';
import StyledLink from '../components/Link';

const NotFound = () => (
  <>
    <SEO title="Not Found" />

    <StyledContainer>
      <StyledHeading2>Сторінка відсутня</StyledHeading2>
      <StyledText>
        Повернутися <StyledLink to="/">на головну</StyledLink>
      </StyledText>
    </StyledContainer>
  </>
);

export default NotFound;
