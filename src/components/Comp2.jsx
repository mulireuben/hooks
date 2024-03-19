import React, { createContext } from 'react';
import Comp3 from './Comp3';

const Comp2 = (props) => {
  // let myAge = 26;
  // let myName = reuben;
  return (
    <div>
      <Comp3 myName={props.myName} />
    </div>
  );
};

export default Comp2;
