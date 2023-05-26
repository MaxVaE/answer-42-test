import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { appStore } from './store';
import { App } from './App';

import './styles/main.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
