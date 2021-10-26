import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import useInterval from '../utils/useInterval';

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  //rename userPresses to userClicks
  const [userClicks, setUserClicks] = useState(0);

  const contextValues = {
    count,
    setCount,
    userClicks,
    setUserClicks,
  };

  //sets initial count
  useEffect(async () => {
    const response = await axios({
      method: 'get',
      url: '/count',
    });

    const { totalCount } = response.data;

    setCount(totalCount);
  }, []);

  //updates the count every 5 seconds
  useInterval(async () => {
    const response = await axios({
      method: 'put',
      url: '/count',
      data: {
        userClicks,
      },
    });

    const { totalCount } = response.data;

    if (totalCount > count) {
      setCount(totalCount);
      setUserClicks(0);
    } else {
      setUserClicks(count - totalCount);
    }
  }, 5000);

  return (
    <CounterContext.Provider value={contextValues}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
