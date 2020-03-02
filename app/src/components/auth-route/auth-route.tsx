import React from 'react';
import { checkAuth } from '../../lib/check-auth';

// Components
import { Route, Redirect } from "react-router-dom";
import Placeholder from '../placeholder/Placeholder';

export const AuthRoute = ({ ...props }) => (
  <Route
    {...props}
    render={() =>
      checkAuth() ? <Placeholder /> : <Redirect to={{ pathname: "/login" }} />
    }
  />
);
export default AuthRoute;