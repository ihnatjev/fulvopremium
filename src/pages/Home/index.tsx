import styled from '@emotion/styled';

import SEO from 'components/SEO';
import StyledContainer from 'components/Container';
import StyledHeading2 from 'components/Heading2';

import heroBackground from './images/hero-bg.jpg';

import fulvoSunflower from './images/fulvo/sunflower.png';
import fulvoRapeseed from './images/fulvo/rapeseed.png';
import fulvoWheat from './images/fulvo/wheat.png';
import fulvoSoy from './images/fulvo/soy.png';
import fulvoCorn from './images/fulvo/corn.png';

import { ReactComponent as ResistanceIcon } from './images/icons/resistance.svg'
import { ReactComponent as YieldIcon } from './images/icons/yield.svg'
import { ReactComponent as GerminationIcon } from './images/icons/germination.svg'
import { ReactComponent as ImmunityIcon } from './images/icons/immunity.svg'
import { ReactComponent as AbsorptionIcon } from './images/icons/absorption.svg'
import { ReactComponent as RootSystemIcon } from './images/icons/root-system.svg'
import { ReactComponent as CertificateIcon } from './images/icons/certificate.svg'
import { ReactComponent as DeliveryIcon } from './images/icons/delivery.svg'
import { ReactComponent as BoxIcon } from './images/icons/box.svg'
import { ReactComponent as VodafoneIcon } from './images/icons/vodafone.svg'
import { ReactComponent as KyivstarIcon } from './images/icons/kyivstar.svg'
import { ReactComponent as UaFlagIcon } from './images/icons/ua-flag.svg'

const StyledSection = styled.section`
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 70%),
    url(${heroBackground}) no-repeat center bottom;

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

        <ResistanceIcon />
        <YieldIcon />
        <GerminationIcon />
        <ImmunityIcon />
        <AbsorptionIcon />
        <RootSystemIcon />
        <CertificateIcon />
        <DeliveryIcon />
        <BoxIcon />
        <VodafoneIcon />
        <KyivstarIcon />
        <UaFlagIcon />

        <img src={fulvoSunflower} alt="" />
        <img src={fulvoRapeseed} alt="" />
        <img src={fulvoWheat} alt="" />
        <img src={fulvoSoy} alt="" />
        <img src={fulvoCorn} alt="" />
    </StyledContainer>
  </>
);

export default Home;
