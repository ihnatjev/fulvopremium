import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import GlobalFont from 'GlobalFont';
import GlobalStyle from 'GlobalStyle';
import GlobalLayout from 'GlobalLayout';

import Home from 'pages/Home';
import Products from 'pages/Products';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Partners from 'pages/Partners';
import Credit from 'pages/Credit';
import Privacy from 'pages/Privacy';
import Terms from 'pages/Terms';
import NotFound from 'pages/NotFound';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <>
    <GlobalFont />
    <GlobalStyle />

    <Routes>
      <Route path="/" element={<GlobalLayout /> }>

        <Route index element={<Home />} />

        <Route path="products/*" element={<Products />} />

        <Route path="about" element={<About /> } />

        <Route path="contact" element={<Contact /> } />

        <Route path="partners" element={<Partners /> } />

        <Route path="credit" element={<Credit /> } />

        <Route path="privacy" element={<Privacy /> } />

        <Route path="terms" element={<Terms />} />

        <Route path='*' element={<NotFound />} />

      </Route>
    </Routes>
  </>
);

export default App;
