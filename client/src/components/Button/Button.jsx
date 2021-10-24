import React, { useContext } from 'react';
import './Button.scss';
import { CounterContext } from '../../context/CounterContext';

function Button() {
  const { count, setCount, userClicks, setUserClicks } =
    useContext(CounterContext);

  //make this function increase userPresses instead of count
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
      <button onClick={increaseCounter}>
        THIS IS A BUTTON WOOOOOOOOOOOOOOOOOOOOOOOO
      </button>
    </>
  );
}

export default Button;
