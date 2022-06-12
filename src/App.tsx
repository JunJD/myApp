

import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';

import Admin from './page/admin';
import Login from './page/login'

const App: React.FC = () => {
  return(
    <Switch>
    <Route path='/admin' component={Admin} />
    <Route path='/login' component={Login} />
    <Redirect to='/login'/>
    </Switch>
  )
};

export default App;
