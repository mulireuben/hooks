import { useCallback, useState } from 'react';

const Usecallback = () => {
  const [productId, setProductId] = useState(1);
  const [referrer, setReferrer] = useState(1);
  console.log('page rerendering');

  const handleSubmit = useCallback(
    (orderDetails) => {
      console.log('fetching products');
    },
    [productId, referrer]
  );

  const handleAdd = () => {
    let newProductId = productId + 1;
    setProductId(newProductId);
  };

  const handleAddR = () => {
    let newReferrer = referrer + 1;
    setReferrer(newReferrer);
  };
  return (
    <div>
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        click here
      </button>

      <button
        onClick={() => {
          handleAddR();
        }}
      >
        click Ref
      </button>
    </div>
  );
};
export default Usecallback;
