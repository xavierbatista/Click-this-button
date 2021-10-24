import React, { useContext } from 'react';
import './Counter.scss';
import { CounterContext } from '../../context/CounterContext';

function Counter() {
  const { count } = useContext(CounterContext);
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //adds commas to the number

  return (
    <div>
      <h1 className="main-header">This button has been clicked</h1>
      <h2 className="counter">
        <span className="count">{formattedCount}</span> times.
      </h2>
    </div>
  );
}

export default Counter;
