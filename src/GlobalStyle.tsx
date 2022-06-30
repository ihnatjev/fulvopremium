import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global styles={css`
    :root {
      --color-black-rgb: 0, 0, 0;
      --color-white-rgb: 255, 255, 255;
      --color-charcoal-rgb: 49, 62, 87;
      --color-burlywood-rgb: 217, 192, 126;
      --color-bud-green-rgb: 130, 173, 76;
      --color-desire-rgb: 238, 68, 85;

      --opacity-900: 0.9;
      --opacity-800: 0.8;
      --opacity-700: 0.7;
      --opacity-600: 0.6;
      --opacity-500: 0.5;
      --opacity-400: 0.4;
      --opacity-300: 0.3;
      --opacity-200: 0.2;
      --opacity-100: 0.1;
      --opacity-50: 0.05;

      --body-font-family: 'Montserrat Medium', sans-serif;
      --body-font-size: 1rem;
      --body-font-weight: 500;
      --body-text-align: left;
      --body-line-height: 1.5;
      --body-color: rgb(var(--color-charcoal-rgb));
      --body-bg-color: rgb(var(--color-white-rgb));

      --link-color: rgb(var(--color-burlywood-rgb));
      --link-decoration: underline;
      --link-hover-decoration: none;

      --heading-font-family: 'Mariupol Bold', sans-serif;
      --heading-font-weight: 700;
      --heading-line-height: 1.25;

      --container-max-width: 1280px;

      @media (prefers-reduced-motion: no-preference) {
        scroll-behavior: smooth;
      }
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body,
    #root {
      height: 100%;
    }

    html {
      -webkit-text-size-adjust: none;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      margin: 0;

      font-family: var(--body-font-family);
      font-size: var(--body-font-size);
      font-weight: var(--body-font-weight);

      text-align: var(--body-text-align);
      line-height: var(--body-line-height);

      color: var(--body-color);
      background-color: var(--body-bg-color);
    }
  `} />
);

export default GlobalStyle;
