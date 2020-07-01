import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from 'react-loader-spinner';

import routes from './routes';

function Homeworks() {
  return (
    <Suspense fallback={<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} className="Loader" />}>
      <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
      </Switch>
    </Suspense>
  );
}

export default Homeworks;
