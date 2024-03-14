import { useContext } from 'react';

import { Comp2Context } from './Comp2';

const Comp4 = (props) => {
  const { myAge } = useContext(Comp2Context);
  return (
    <div>
      <h1>{myAge}</h1>
    </div>
  );
};

export default Comp4;
