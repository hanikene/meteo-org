import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homepage, Error404, Weather } from '../';

const Main = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={(props) => <Homepage {...props} />} />
        <Route path='/q/:query' render={(props) => <Weather {...props} />} />
        <Route
          exact
          path='/gps'
          render={(props) => <Weather {...props} localisation />}
        />
        <Route exact path='/404' render={(props) => <Error404 {...props} />} />
        <Route path='/' render={(props) => <Error404 {...props} />} />
      </Switch>
    </div>
  );
};

export default Main;
