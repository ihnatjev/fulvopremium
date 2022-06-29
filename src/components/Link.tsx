import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: var(--link-color);
  text-decoration: var(--link-decoration);

  &:hover {
    text-decoration: var(--link-hover-decoration);
  }
`;

export default StyledLink;
