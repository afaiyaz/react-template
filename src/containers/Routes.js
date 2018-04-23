import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import LandingPage from 'containers/LandingPage/LandingPage';
import PageB from 'containers/OtherPage/PageB';

const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <main>
      <Route path="/" exact component={LandingPage} />
      <Route path="/pageB" component={PageB} />
    </main>
  </Router>
);
