import styled from '@emotion/styled';

import SEO from 'components/SEO';
import StyledContainer from 'components/Container';
import StyledHeading3 from 'components/Heading3';

import heroBackground from './images/hero-bg.jpg';
import benefitsBackground from './images/benefits-bg.jpg';
import benefitsListMarker from './images/benefits-list-marker.svg'

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

const Hero = styled.section`
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 70%),
    url(${heroBackground}) no-repeat center bottom;

  background-size: cover;

  height: 90vh;
  min-height: 480px;
`;

const PrimaryBenefits = styled.section`
  background: url(${benefitsBackground}) no-repeat right top;
  background-size: contains;

  min-height: 800px;
`;

const SecondaryBenefits = styled.section``;

const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BenefitListItem = styled.li`
  background: url(${benefitsListMarker}) no-repeat left 10px;

  font-family: var(--heading-font-family);

  padding-left: 104px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Home = () => (
  <>
    <SEO title="Home" />

    <Hero>
      <StyledContainer>
        Hero
      </StyledContainer>
    </Hero>

    <PrimaryBenefits>
      <StyledContainer>
        <div>
          <ResistanceIcon />
          <StyledHeading3>
            Покращує морозостійкість і посухостійкість
          </StyledHeading3>
        </div>

        <div>
          <YieldIcon />
          <StyledHeading3>
            Збільшує врожайність і покращує якість
          </StyledHeading3>
        </div>

        <div>
          <GerminationIcon />
          <StyledHeading3>
            Збільшує енергію проростання та схожість насіння
          </StyledHeading3>
        </div>

        <div>
          <ImmunityIcon />
          <StyledHeading3>
            Підвищує імунітет та стійкість до хвороб
          </StyledHeading3>
        </div>

        <div>
          <AbsorptionIcon />
          <StyledHeading3>
            Збільшує засвоєння мінерального живлення
          </StyledHeading3>
        </div>

        <div>
          <RootSystemIcon />
          <StyledHeading3>
            Стимулює розвиток кореневої системи
          </StyledHeading3>
        </div>
      </StyledContainer>
    </PrimaryBenefits>

    <SecondaryBenefits>
      <StyledContainer>

        <BenefitList>
          <BenefitListItem>
            Створює оптимальні умови для проростання насіння
          </BenefitListItem>

          <BenefitListItem>
            Збільшує терміни зберігання продукції
          </BenefitListItem>

          <BenefitListItem>
            Покращує структуру грунту при грунтовому внесенні
          </BenefitListItem>

          <BenefitListItem>
            Сприяє відновленню рослини у стресових станах
          </BenefitListItem>

          <BenefitListItem>
            Підвищує ефективність засвоєння добрив
          </BenefitListItem>

          <BenefitListItem>
            Прискорює дозрівання та підвищує врожайність
          </BenefitListItem>

          <BenefitListItem>
            Посилює фотосинтез
          </BenefitListItem>

          <BenefitListItem>
            Сприяє енергетичному метаболізму
          </BenefitListItem>

          <BenefitListItem>
            Покращує якісні показники врожаю
          </BenefitListItem>

          <BenefitListItem>
            Забезпечує швидке відновлення та приживлюваність рослин після пересадки
          </BenefitListItem>
        </BenefitList>

      </StyledContainer>
    </SecondaryBenefits>

    <StyledContainer>
      <div>
        <CertificateIcon />
        <DeliveryIcon />
        <BoxIcon />
        <VodafoneIcon />
        <KyivstarIcon />
        <UaFlagIcon />
      </div>

      <div>
        <img src={fulvoSunflower} alt="Фульво Преміум Соняшник" />
      </div>

      <div>
        <img src={fulvoRapeseed} alt="Фульво Преміум Ріпак" />
      </div>

      <div>
        <img src={fulvoWheat} alt="Фульво Преміум Пшениця" />
      </div>

      <div>
        <img src={fulvoSoy} alt="Фульво Преміум Бобові" />
      </div>

      <div>
        <img src={fulvoCorn} alt="Фульво Преміум Кукурудза" />
      </div>
    </StyledContainer>
  </>
);

export default Home;
