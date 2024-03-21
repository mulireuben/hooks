import React, { useContext } from 'react';
import { PropsContext } from '../pages/Propdrilling';

const Comp5 = (props) => {
  const { location } = useContext(PropsContext);
  return (
    <div>
      <h1>my name is {props.myName} </h1>
      <h2>my location is {location}</h2>
    </div>
  );
};

export default Comp5;
