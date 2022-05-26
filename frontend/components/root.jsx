import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
i
import App from './app';

const Root = ({ store,cable }) => (
  <Provider store={store}>
    <HashRouter>
      <App cable={cable} />
    </HashRouter>
  </Provider>
);

export default Root;