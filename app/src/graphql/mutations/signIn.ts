import gql from 'graphql-tag';

export const SIGN_IN = gql`
mutation LoginMutation($email: String!, $password: String!) {
  Login(email: $email, password: $password)
}
`;
