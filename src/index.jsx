// @flow
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');
let renderApp;

if (root) {
  renderApp = () =>
    render(
      <BrowserRouter key={Math.random()}>
        <App />
      </BrowserRouter>,
      root
    );

  // Initial render
  renderApp();

  // Hot module replacement;
  if (module.hot) {
    module.hot.accept('./App', () => {
      renderApp();
    });
  }
} else {
  throw new Error('No root element found to render App component');
}
