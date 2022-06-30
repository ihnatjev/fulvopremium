import React from 'react';

import SEO from '../components/SEO';
import StyledContainer from '../components/Container';
import StyledHeading2 from '../components/Heading2';
import styled from '@emotion/styled';

const HelloWorld = styled.div`
  border: 1px solid red;
`;

const Test = styled(HelloWorld)`
  color: red;
`;

const Home = () => (
  <>
    <SEO title="Home" />

    <StyledContainer>
      <StyledHeading2>Головна</StyledHeading2>
      <HelloWorld>
        Hello World!
      </HelloWorld>
      <Test>
        Hello World!
      </Test>
    </StyledContainer>
  </>
);

export default Home;
