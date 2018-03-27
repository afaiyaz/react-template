import React from 'react';
import Routes from 'containers/Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
