import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from 'App';
import store from 'store';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </HashRouter>
    </Provider>
  </StrictMode>
);
