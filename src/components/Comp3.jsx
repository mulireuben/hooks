import React, { useContext } from 'react';
import Comp4 from './Comp4';
// import { MynameContext } from '../pages/Usecontext';

const Comp3 = (props) => {
  // const { name } = useContext(MynameContext);
  return (
    <div>
      <Comp4 myName={props.myName} />
    </div>
  );
};

export default Comp3;
