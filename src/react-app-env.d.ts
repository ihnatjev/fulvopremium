/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_GA_TRACKING_ID: string;
  }
}

declare module '*.woff2' {
  const src: string;
  export default src;
}
