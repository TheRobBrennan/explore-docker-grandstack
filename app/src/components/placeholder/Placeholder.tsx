import React from 'react';
import { Link } from "react-router-dom";


export const Placeholder = () => {
  return (
    <>
      <div>Placeholder component works!</div>
      <Link to="/logout">Logout</Link>
    </>
  );
};

export default Placeholder;