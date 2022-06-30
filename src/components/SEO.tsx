import { Helmet } from 'react-helmet-async';

const SEO = ({ title }: any) => (
  <Helmet
    title={title}

    titleTemplate="ФУЛЬВО ПРЕМІУМ - %s"
  />
);

export default SEO;
