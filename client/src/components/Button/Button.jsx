import React, { useContext } from 'react';
import './Button.scss';
import { CounterContext } from '../../context/CounterContext';

function Button() {
  const { count, setCount, userClicks, setUserClicks } =
    useContext(CounterContext);

  const increaseCounter = () => {
    setUserClicks((userClicks) => {
      userClicks += 1;
      return userClicks;
    });

    setCount((count) => {
      count++;
      return count;
    });
  };

  return (
    <>
      <button className="button" onClick={increaseCounter}>
        Click this button
      </button>
    </>
  );
}

export default Button;
