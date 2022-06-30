import { Global, css } from '@emotion/react';

import MontserratMediumWoff2 from './assets/fonts/montserrat-medium.woff2';
import MariupolBoldWoff2 from './assets/fonts/mariupol-bold.woff2';

const GlobalFont = () => (
  <Global styles={css`
    @font-face {
      font-family: 'Montserrat Medium';
      src: url(${MontserratMediumWoff2}) format('woff2');
    }

    @font-face {
      font-family: 'Mariupol Bold';
      src: url(${MariupolBoldWoff2}) format('woff2');
    }
  `} />
);

export default GlobalFont;
