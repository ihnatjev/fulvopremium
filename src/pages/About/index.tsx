import styled from '@emotion/styled';

import SEO from 'components/SEO';
import Container from 'components/Container';

import shevchenkoPhoto from './images/team-members/shevchenko.jpg';

const TeamMembers = styled.section`
  display: flex;
  margin: -8px;
`;

const TeamMember = styled.div`
  border: 1px solid rgb(var(--color-burlywood-rgb));
  padding: 16px;
  margin: 8px;
`;

const TeamMemberPhoto = styled.img`
  width: 100%;
`;

const TeamMemberName = styled.div`
  font-size: 1.5rem;
  font-family: var(--heading-font-family);

  padding-top: 8px;
  padding-bottom: 8px;
`;

const TeamMemberPosition = styled.div``;

const About = () => (
  <>
    <SEO title="About" />

    <Container>
      <h2>Про нас</h2>

      <TeamMembers>

        <TeamMember>
          <TeamMemberPhoto src={shevchenkoPhoto} alt="" />
          <TeamMemberName>
            Тарас Григорович Шевченко
          </TeamMemberName>
          <TeamMemberPosition>
            Технічний експерт
          </TeamMemberPosition>
        </TeamMember>

        <TeamMember>
          <TeamMemberPhoto src={shevchenkoPhoto} alt="" />
          <TeamMemberName>
            Тарас Григорович Шевченко
          </TeamMemberName>
          <TeamMemberPosition>
            Технічний експерт
          </TeamMemberPosition>
        </TeamMember>

        <TeamMember>
          <TeamMemberPhoto src={shevchenkoPhoto} alt="" />
          <TeamMemberName>
            Тарас Григорович Шевченко
          </TeamMemberName>
          <TeamMemberPosition>
            Технічний експерт
          </TeamMemberPosition>
        </TeamMember>

        <TeamMember>
          <TeamMemberPhoto src={shevchenkoPhoto} alt="" />
          <TeamMemberName>
            Тарас Григорович Шевченко
          </TeamMemberName>
          <TeamMemberPosition>
            Технічний експерт
          </TeamMemberPosition>
        </TeamMember>

      </TeamMembers>
    </Container>
  </>
);

export default About;
