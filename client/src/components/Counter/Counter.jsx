import React, { useContext } from 'react';
import './Counter.scss';
import { CounterContext } from '../../context/CounterContext';

function Counter() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h1>This button has been pressed</h1>
      <h2>{count} times</h2>
    </div>
  );
}

export default Counter;
