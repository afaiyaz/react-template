import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import PageA from 'containers/PageA/PageA';
import PageB from 'containers/PageB';

const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <main>
      <Route path="/" exact component={PageA} />
      <Route path="/pageB" component={PageB} />
    </main>
  </Router>
);
