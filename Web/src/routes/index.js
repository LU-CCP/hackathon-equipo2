import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About, Counter, Home, Game, Winner, Ranking } from '../containers';

import { ROOT, ABOUT, COUNTER, GAME, WINNER, RANKING } from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ROOT} component={Home} />
    <Route exact path={ABOUT} component={About} />
    <Route exact path={COUNTER} component={Counter} />
    <Route exact path={GAME} component={Game} />
    <Route exact path={RANKING} component={Ranking} />
    <Route exact path={WINNER} component={Winner} />
  </Switch>
);

export default Routes;
