import React from 'react';
import { ApolloError } from 'apollo-client';

interface ErrorMessageProps {
  error?: Error | ApolloError,
  friendlyErrorMessage?: string,
}

export const ErrorMessage = ({ error, friendlyErrorMessage }: ErrorMessageProps) => {
  if (!error) return null;

  // Use the friendly message if one has been supplied
  if (friendlyErrorMessage) {
    return <p style={{ color: 'red' }}>{friendlyErrorMessage}</p>;
  }

  // Default - Return error message as thrown
  return <p style={{ color: 'red' }}>{error.message}</p>;
};
export default ErrorMessage;