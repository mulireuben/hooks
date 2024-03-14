import React, { createContext } from 'react';
import Comp3 from './Comp3';

export const Comp2Context = createContext();
const Comp2 = () => {
let myAge=26
  return (
    <Comp2Context.Provider value={{myAge}} >
    <div>
      <h1>comp2</h1>
      <Comp3 />
    </div >
    </Comp2Context.Provider>
    
      
  );
};

export default Comp2;
