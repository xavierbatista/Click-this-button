import React, { useContext } from 'react';
import './Counter.scss';
import { CounterContext } from '../../context/CounterContext';

function Counter() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h1 className="main-header">This button has been clicked</h1>
      <h2 className="counter">
        <span className="count">{count}</span> times.
      </h2>
    </div>
  );
}

export default Counter;
