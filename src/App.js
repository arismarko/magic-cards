import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import NavContainer from './containers/navContainer';
// import ResultsContainer from './containers/citiesContainer';
import CitiesContainer from './containers/citiesContainer';
// import PersonContainer from './containers/personContainer';


const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <div>
      <NavContainer />
      <Route exact path="/" component={CitiesContainer} />
    </div>
  </Router>
);

export default App;
