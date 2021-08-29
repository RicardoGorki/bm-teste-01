import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Stockmarket from '../pages/Stockmarket';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/stockmarket" component={Stockmarket} />
  </Switch>
);

export default Routes;