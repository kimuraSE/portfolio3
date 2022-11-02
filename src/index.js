import React from 'react';
import ReactDOM from 'react-dom/client';
import { Main } from './Main';

import "./css/reset/reset-css.css";
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

