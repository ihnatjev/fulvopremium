import styled from '@emotion/styled';

import SEO from 'components/SEO';
import Container from 'components/Container';
import GridRow from 'components/GridRow';
import GridCol from 'components/GridCol';

import shevchenkoPhoto from './images/team-members/shevchenko.jpg';

const TeamMembers = styled.section``;

const TeamMember = styled.div`
  border: 1px solid rgb(var(--color-burlywood-rgb));
  padding: 16px;
`;

const TeamMemberPhoto = styled.img`
  width: 100%;
`;

const TeamMemberName = styled.div`
  font-size: 1.5rem;
  font-family: var(--heading-font-family);
`;

const TeamMemberPosition = styled.div``;

const AboutPage = () => (
  <>
    <SEO title="About" />

    <Container>
      <h2>Про нас</h2>

      <TeamMembers>

        <GridRow>

          <GridCol>
            <TeamMember>
              <TeamMemberPhoto src={shevchenkoPhoto} alt="" />
              <TeamMemberName>
                Тарас Григорович Шевченко
              </TeamMemberName>
              <TeamMemberPosition>
                Технічний експерт
              </TeamMemberPosition>
            </TeamMember>
          </GridCol>

          <GridCol>
            <TeamMember>
              <TeamMemberPhoto src={shevchenkoPhoto} alt="" />
              <TeamMemberName>
                Тарас Григорович Шевченко
              </TeamMemberName>
              <TeamMemberPosition>
                Технічний експерт
              </TeamMemberPosition>
            </TeamMember>
          </GridCol>

          <GridCol>
            <TeamMember>
              <TeamMemberPhoto src={shevchenkoPhoto} alt="" />
              <TeamMemberName>
                Тарас Григорович Шевченко
              </TeamMemberName>
              <TeamMemberPosition>
                Технічний експерт
              </TeamMemberPosition>
            </TeamMember>
          </GridCol>

          <GridCol>
            <TeamMember>
              <TeamMemberPhoto src={shevchenkoPhoto} alt="" />
              <TeamMemberName>
                Тарас Григорович Шевченко
              </TeamMemberName>
              <TeamMemberPosition>
                Технічний експерт
              </TeamMemberPosition>
            </TeamMember>
          </GridCol>

        </GridRow>
      </TeamMembers>
    </Container>
  </>
);

export default AboutPage;
