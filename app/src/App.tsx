import React from 'react';

// Components
import AuthRoute from './components/auth-route/auth-route';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';

// Routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Apollo and GraphQL imports
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './graphql/apollo/apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <AuthRoute exact path="/" />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
