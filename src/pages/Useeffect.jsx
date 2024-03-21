import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Useeffect = () => {
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setRecords(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return;
};

export default Useeffect;
