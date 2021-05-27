import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn }) => (
  <Route>
    {
      () => (loggedIn ? children : <Redirect to="/" />)
    }
  </Route>
);

export default ProtectedRoute;
