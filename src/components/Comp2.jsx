import React, { createContext } from 'react';
import Comp3 from './Comp3';

const Comp2 = (props) => {
 
  return (
    <div>
      <Comp3 myName={props.myName} />
    </div>
  );
};

export default Comp2;
