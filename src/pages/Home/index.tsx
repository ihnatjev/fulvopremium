import styled from '@emotion/styled';

import SEO from 'components/SEO';
import StyledContainer from 'components/Container';
import StyledHeading2 from 'components/Heading2';

import bg from './bg.jpg';

const StyledSection = styled.section`
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 70%),
    url(${bg}) no-repeat center bottom;

  background-size: cover;

  height: 90vh;
  min-height: 480px;
`;

const Home = () => (
  <>
    <SEO title="Home" />

    <StyledSection></StyledSection>

    <StyledContainer>
        <StyledHeading2>Головна</StyledHeading2>
    </StyledContainer>
  </>
);

export default Home;
