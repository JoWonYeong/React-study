import React, { useState } from 'react';

export default function Counter({ total, onClickHandler }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className='counter'>
        <p className='number'>
          {count}
          <span className='total'>/{total}</span>
        </p>
        <button
          className='button'
          onClick={() => {
            // n번 써도 count + 1
            // setCount(count + 1);
            // n번 쓰면 count + n
            // setCount((prevCount) => { return prevCount + 1; });
            setCount((prevCount) => prevCount + 1);
            onClickHandler();
          }}
        >
          Add +
        </button>
      </div>
    </>
  );
}
