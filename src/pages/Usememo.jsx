import React, { useEffect, useMemo, useState } from 'react';

const MyComponent = () => {
  const [cashierBalance, setCashierBalance] = useState(10);

  const processBankBalancesOnAmazonServer = () => {
    console.log('processBankBalancesOnAmazonServer CALLED');
    let newBalance = cashierBalance + 999;

    return newBalance;
  };
  const newBankBalance = useMemo(() => {
    console.log('Data changed hence usememo activated');

    return processBankBalancesOnAmazonServer();
  }, [cashierBalance]);

  const handleAdd = (value) => {
    let currentBalance = cashierBalance + 1000;
    setCashierBalance(currentBalance);
  };

  return (
    <div>
      {/* Render the memoized value */}
      <button onClick={() => handleAdd()}>Add cashier balance by 1000</button>
      <p> The new bank balance {newBankBalance}</p>
    </div>
  );
};

export default MyComponent;
