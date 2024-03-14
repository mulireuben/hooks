import React, { useContext } from 'react';
import { AlphaContext } from './Alpha';

const Comp5 = () => {
  const { myName, myLocation } = useContext(AlphaContext);
  return (
    <div>
      <h1> {myName} </h1>
      <h1>{myLocation}</h1>
    </div>
  );
};

export default Comp5;
