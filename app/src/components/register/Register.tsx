import React from 'react';
import { Redirect, Link } from "react-router-dom";
import { useForm } from 'react-hook-form';  // https://react-hook-form.com
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import ErrorMessage from '../error-message/error-message'

const REGISTER = gql`
  mutation RegisterMutation(
    $email: String!
    $password: String!
    $username: String!
  ) {
    RegisterUser(email: $email, username: $username, password: $password) {
      id
    }
  }
`;

export const Register = () => {
  let friendlyErrorMessage
  const [RegisterUser, { data, error }] = useMutation(REGISTER);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'rob@therobbrennan.com',
      username: 'therobbrennan',
      password: 'testtest',
      confirmPassword: 'testtest'
    }
  });

  const onSubmit = (data: any) => {
    RegisterUser({ variables: { email: data.email, username: data.username, password: data.password } }).catch(err => {
      console.error(`Unable to register a new user: ${err}`)
    });
  };

  if (!error && data && !!data.RegisterUser.id) {
    console.log(`Successfully registered a new user`);
    return <Redirect to={{ pathname: "/login" }} />;
  }

  if (error && error.message) {
    switch (true) {
      case RegExp('already exists').test(error.message):
        friendlyErrorMessage = `Sorry, an account already exists for this user.`
        break
      default:
        friendlyErrorMessage = `Sorry. We are unable to create an account for this user.`
        break
    }
  }

  return (
    <>
      <h1>Register</h1>
      <ErrorMessage error={error} friendlyErrorMessage={friendlyErrorMessage} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input name="username" ref={register} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" ref={register} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" ref={register} />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input name="confirmPassword" ref={register} />
        </div>
        <button type="submit">Submit</button>
        <p>Return to the <Link to={{ pathname: "/" }}>home page</Link></p>
      </form>
    </>
  );
};

export default Register;