import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --body-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --body-font-size: 1rem;
    --body-font-weight: 400;
    --body-text-align: left;
    --body-line-height: 1.5;
    --body-color: rgba(49, 62, 87, 1);
    --body-bg-color: rgba(255, 255, 255, 1);

    --link-color: rgba(217, 192, 126, 1);
    --link-decoration: underline;
    --link-hover-decoration: none;

    --heading-font-weight: 500;
    --heading-line-height: 1.25;

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

  a {
    color: var(--link-color);
    text-decoration: var(--link-decoration);

    &:hover {
      text-decoration: var(--link-hover-decoration);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--heading-font-weight);
    line-height: var(--heading-line-height);

    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  img,
  svg {
    vertical-align: middle;
  }
`;

export default GlobalStyle;
