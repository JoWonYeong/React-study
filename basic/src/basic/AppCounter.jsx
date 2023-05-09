import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  let [total, setTotal] = useState(0);
  // const onClickHandler = () => {
  //   setTotal(total + 1);
  // };
  // 이전 상태값을 근거로 계산
  const onClickHandler = () => setTotal((prev) => prev + 1);

  return (
    <>
      <div className='container'>
        <div className='banner'>
          Total Count: {total} {total > 10 ? '🔥' : '❄️'}
        </div>
      </div>
      <div className='counters'>
        <Counter total={total} onClickHandler={onClickHandler} />
        <Counter total={total} onClickHandler={onClickHandler} />
      </div>
    </>
  );
}
