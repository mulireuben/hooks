import React from 'react';
import Comp4 from './Comp4';

const Comp3 = (props) => {
  return (
    <div>
      <Comp4 myName={props.myName} />
    </div>
  );
};

export default Comp3;
