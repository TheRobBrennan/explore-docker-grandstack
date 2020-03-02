import React from 'react';
import { Redirect } from "react-router-dom";
import { removeAuthenticationToken } from '../../lib/remove-authentication-token';

export const Logout = () => {
  removeAuthenticationToken();
  return <Redirect to={{ pathname: "/" }} />;
};

export default Logout;