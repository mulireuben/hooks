import React, { createContext } from 'react';
import Comp2 from './Comp2';

export const AlphaContext = createContext();

const Alpha = () => {
  let myName = 'reuben';
  let myLocation = 'Nairobi';
  // let myImage = axios.get();
  return (
    <AlphaContext.Provider value={{ myName, myLocation }}>
      <div>
        <h1>Alpha</h1>
        <Comp2 />
      </div>
    </AlphaContext.Provider>
  );
};

export default Alpha;
