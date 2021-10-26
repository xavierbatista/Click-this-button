import React from 'react';
import Button from '../components/Button/Button';
import Counter from '../components/Counter/Counter';
import './ButtonPage.scss';

function ButtonPage() {
  const colors = [
    '#CC99C9',
    '#9EC1CF',
    '#9EE09E',
    '#FDFD97',
    '#FEB144',
    '#FF6663',
  ];
  const backgroundColor = colors[Math.floor(Math.random() * colors.length)]; //selects a random color from the array

  return (
    <div
      className="button-page"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className="main">
        <Button />
        <Counter />
      </div>
    </div>
  );
}

export default ButtonPage;
