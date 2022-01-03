import { Provider as AlertProvider, positions, transitions } from 'react-alert';

import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './store';

const options = {
  timeout: 5000,
  position: positions.MIDDLE,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
