import 'core-js';
import React from 'react';
import { render } from 'react-dom';

// Components
import App from './App';

// Styles
import './index.css';

const rootElement = document.createElement('div');
rootElement.className = 'root';
document.body.appendChild(rootElement);

render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  rootElement
);
