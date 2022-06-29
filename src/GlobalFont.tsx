import { createGlobalStyle } from 'styled-components';

import MontserratMediumWoff2 from './assets/fonts/montserrat-medium.woff2';
import MariupolBoldWoff2 from './assets/fonts/mariupol-bold.woff2';

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat Medium';
    src: url(${MontserratMediumWoff2}) format('woff2');
  }

  @font-face {
    font-family: 'Mariupol Bold';
    src: url(${MariupolBoldWoff2}) format('woff2');
  }
`;

export default GlobalFont;
