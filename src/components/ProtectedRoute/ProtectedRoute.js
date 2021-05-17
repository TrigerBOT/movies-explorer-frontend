import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute  ({ component: Component, ...props }){
  <Route>
    {() =>
      props.loggedIn ? <Component {...props} /> : <Redirect to={props.redirectTo} />
    }
  </Route>
};

export default ProtectedRoute;