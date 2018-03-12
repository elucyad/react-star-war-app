import App from './containers/App';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';

window.React = React;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-site')
);
