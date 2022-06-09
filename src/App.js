import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import logo from './logo.svg';
import './App.css';

const GlobalStyle = createGlobalStyle`
  :root {
    --body-color: #fff;

    @media (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;

    color: var(--body-color);

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </header>
    </div>
  </>
);

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about" className="App-link">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/" className="App-link">Home</Link>
      </nav>
    </>
  );
}

function NotFound() {
  return (
    <>
      <main>
        <h2>Content Not Found</h2>
        <p>
          Ooooops...
        </p>
      </main>
      <nav>
        <Link to="/" className="App-link">Home</Link>
      </nav>
    </>
  );
}

export default App;
