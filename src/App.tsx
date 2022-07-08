import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import GlobalFont from 'GlobalFont';
import GlobalStyle from 'GlobalStyle';
import GlobalLayout from 'GlobalLayout';

import HomePage from 'pages/HomePage';
import ProductsPage from 'pages/ProductsPage';
import AboutPage from 'pages/AboutPage';
import ContactPage from 'pages/ContactPage';
import PartnersPage from 'pages/PartnersPage';
import CreditPage from 'pages/CreditPage';
import PrivacyPage from 'pages/PrivacyPage';
import TermsPage from 'pages/TermsPage';
import NotFoundPage from 'pages/NotFoundPage';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <>
    <GlobalFont />
    <GlobalStyle />

    <Routes>
      <Route path="/" element={<GlobalLayout /> }>

        <Route index element={<HomePage />} />

        <Route path="products/*" element={<ProductsPage />} />

        <Route path="about" element={<AboutPage /> } />

        <Route path="contact" element={<ContactPage /> } />

        <Route path="partners" element={<PartnersPage /> } />

        <Route path="credit" element={<CreditPage /> } />

        <Route path="privacy" element={<PrivacyPage /> } />

        <Route path="terms" element={<TermsPage />} />

        <Route path='*' element={<NotFoundPage />} />

      </Route>
    </Routes>
  </>
);

export default App;
