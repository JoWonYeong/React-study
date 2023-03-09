import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  let [count, setCount] = useState(0);
  // const onClickHandler = () => {
  //   setCount(count + 1);
  // };
  const onClickHandler = () => setCount((prev) => prev + 1);

  return (
    <>
      <div className='container'>
        <div className='banner'>
          Total Count: {count} {count > 10 ? '🔥' : '❄️'}
        </div>
      </div>
      <div className='counters'>
        <Counter total={count} onClickHandler={onClickHandler} />
        <Counter total={count} onClickHandler={onClickHandler} />
      </div>
    </>
  );
}
