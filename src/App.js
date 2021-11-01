import React, { useState, useEffect } from 'react';
import { name } from './common';

const dd = () => {
  console('sda');
};

const test = (ddaa) => {
  console.log(dd);
};

const initState = {
  a: 1,
  b: {
    abc: 1,
    bb: 2,
  },
};

function App() {
  const [state, setstate] = useState(initState);
  const values = {
    b: {
      ...initState.b,
      abc: 3,
    },
  };
  const setDats = () => setstate((prev) => ({ ...prev, ...values }));
  useEffect(() => setDats(), []);
  console.log('state', state);

  return <div className="App">33333</div>;
}

export default App;
