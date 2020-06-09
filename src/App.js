import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Home from './views/home';
import hw01 from './views/hw01';
import hw02fb from './views/hw02fb';
import hw02pb from './views/hw02pb';

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path={routes.hw01} component={hw01} />
      <Route path={routes.hw02fb} component={hw02fb} />
      <Route path={routes.hw02pb} component={hw02pb} />
    </Switch>
  </div>
);

export default App;
