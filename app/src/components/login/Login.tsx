import React from 'react';
import { Redirect, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';  // https://react-hook-form.com
import { useMutation } from '@apollo/react-hooks';

import { SIGN_IN } from '../../graphql/mutations/signIn';
import { storeAuthenticationToken } from '../../lib/store-authentication-token';
import ErrorMessage from '../error-message/error-message'

export const Login = () => {
  let friendlyErrorMessage;
  const [Login, { data, error }] = useMutation(SIGN_IN);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'rob@therobbrennan.com',
      password: 'testtest',
    }
  });

  const onSubmit = (data: any) => {
    Login({ variables: { email: data.email, password: data.password } }).catch(err => {
      console.error(`Unable to login user account: ${err}`);
    });
  };

  if (error && error.message) {
    switch (true) {
      default:
        friendlyErrorMessage = `Unable to login. Either your password is incorrect, or you need to create an account.`;
        break;
    }
  }

  if (data && data.Login) {
    storeAuthenticationToken(data.Login);
    return <Redirect to={{ pathname: "/" }} />;
  }

  return (
    <>
      <h1>Login</h1>
      <ErrorMessage error={error} friendlyErrorMessage={friendlyErrorMessage} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" ref={register} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" ref={register} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Need an account? Please <Link to="/register">register</Link>.</p>
    </>
  );
};

export default Login;