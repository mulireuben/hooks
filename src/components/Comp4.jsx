import { useContext } from 'react';

// import { Comp2Context } from './Comp2';
import Comp5 from './Comp5';

const Comp4 = (props) => {
  // const { myAge } = useContext(Comp2Context);
  return (
    <div>
    
      <Comp5 myName={props.myName}/>
    </div>
  );
};

export default Comp4;
