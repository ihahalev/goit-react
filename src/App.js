import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Home from './views/home';
import hw01 from './views/hw01';
import hw02fb from './views/hw02fb';
import hw02pb from './views/hw02pb';
import hw03pb from './views/hw03pb';
import hw03img from './views/hw03img';

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path={routes.hw01} component={hw01} />
      <Route path={routes.hw02fb} component={hw02fb} />
      <Route path={routes.hw02pb} component={hw02pb} />
      <Route path={routes.hw03pb} component={hw03pb} />
      <Route path={routes.hw03img} component={hw03img} />
    </Switch>
  </div>
);

export default App;
