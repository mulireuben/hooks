import React from 'react';
import Comp5 from '../components/Comp5';
import Alpha from '../components/Alpha';
import { createContext } from 'react';


export const PropsContext = createContext() 

const Propdrilling = () => {
 let myName = 'reuben';
 let location = "Nairobi"
 return (
   <PropsContext.Provider value={{ location }}>
     <div>
       <Alpha myName={myName} />
     </div>
   </PropsContext.Provider>
 );
};

export default Propdrilling;
