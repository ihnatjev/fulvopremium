import styled from '@emotion/styled';

import SEO from 'components/SEO';
import Container from 'components/Container';

import heroBackground from './images/hero-bg.jpg';
import benefitsBackground from './images/benefits-bg.jpg';
import benefitsListMarker from './images/benefits-list-marker.svg'

import aboutBackground from './images/about-bg.png';

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

/* Hero */
const Hero = styled.section`
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 70%),
    url(${heroBackground}) no-repeat center bottom;

  background-size: cover;

  height: 90vh;
  min-height: 480px;
`;

const HeroIntro = styled.h1`
  line-height: 1.15;
`;

const HeroSlogan = styled.div`
  font-size: 1.5rem;
`;

/* Primary Benefits */
const PrimaryBenefits = styled.section`
  background: url(${benefitsBackground}) no-repeat right top;
  background-size: contain;

  min-height: 800px;
  padding-top: 48px;
  padding-bottom: 48px;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;

  margin-top: 48px;
  margin-bottom: 48px;
`;

const BenefitIcon = styled.div`
  margin-right: 32px;
`;

const BenefitIconText = styled.span`
  font-size: 1.5rem;
  font-family: var(--heading-font-family);
`;

/* Secondary Benefits */
const SecondaryBenefits = styled.section``;

const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BenefitListItem = styled.li`
  background: url(${benefitsListMarker}) no-repeat left 10px;

  font-size: 1rem;
  font-family: var(--heading-font-family);

  padding-left: 104px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

/* Effectiveness */
const Effectiveness = styled.section``;

/* Characteristics */
const Characteristics = styled.section``;

/* About */
const About = styled.section`
  background: url(${aboutBackground}) no-repeat center bottom;

  padding-top: 96px;
  padding-bottom: 208px;
`;

const AboutText = styled.div`
  font-size: 1.25rem;

  strong {
    font-size: 1.5rem;
    font-family: var(--heading-font-family);
  }
`;

const Home = () => (
  <>
    <SEO title="Home" />

    <Hero>
      <Container>
        <HeroIntro>
          Забезпечує стабільну прибавку врожаю до 20% за будь-яких погодних умов!
        </HeroIntro>
        <HeroSlogan>
          Fulvo Premium - Новинка серед добрив, яка не має аналогів.
        </HeroSlogan>
      </Container>
    </Hero>

    <PrimaryBenefits>
      <Container>

        <BenefitItem>
          <BenefitIcon>
            <ResistanceIcon />
          </BenefitIcon>
          <BenefitIconText>
            Покращує морозостійкість і посухостійкість
          </BenefitIconText>
        </BenefitItem>

        <BenefitItem>
          <BenefitIcon>
            <YieldIcon />
          </BenefitIcon>
          <BenefitIconText>
            Збільшує врожайність і покращує якість
          </BenefitIconText>
        </BenefitItem>

        <BenefitItem>
          <BenefitIcon>
            <GerminationIcon />
          </BenefitIcon>
          <BenefitIconText>
            Збільшує енергію проростання та схожість насіння
          </BenefitIconText>
        </BenefitItem>

        <BenefitItem>
          <BenefitIcon>
            <ImmunityIcon />
          </BenefitIcon>
          <BenefitIconText>
            Підвищує імунітет та стійкість до хвороб
          </BenefitIconText>
        </BenefitItem>

        <BenefitItem>
          <BenefitIcon>
            <AbsorptionIcon />
          </BenefitIcon>
          <BenefitIconText>
            Збільшує засвоєння мінерального живлення
          </BenefitIconText>
        </BenefitItem>

        <BenefitItem>
          <BenefitIcon>
            <RootSystemIcon />
          </BenefitIcon>
          <BenefitIconText>
            Стимулює розвиток кореневої системи
          </BenefitIconText>
        </BenefitItem>

      </Container>
    </PrimaryBenefits>

    <SecondaryBenefits>
      <Container>

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

      </Container>
    </SecondaryBenefits>

    <Effectiveness></Effectiveness>

    <Characteristics></Characteristics>

    <About>
      <Container>

        <AboutText>
          <p>
            <strong>Фульво Преміум</strong> - новітній екологічно-чистий гуміновий препарат отриманий методом екстракції бурого вугілля та являє собою комплекс біополімерів нерегулярної будови на основі солей гумінових та фульвових кислот отриманих за спеціальною технологією.
          </p>
          <p>
            До складу продукту також входять, макро і мікроелементи у хелатній формі та біологічно-активні речовини, що модулюють роботу  силових станцій клітини-мітохондрій безпосередно посилюючи активність роботи ферменту АТФ синтеза, що збільшує кількість утворення молекул АТФ.
          </p>
        </AboutText>

      </Container>
    </About>

    <Container>
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
    </Container>
  </>
);

export default Home;
