import React, { useState } from 'react';
import './App.css';
import Products from './components/Products';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  // useState의 변수설정부분 함수의 첫번째 인자는 이전 값
  // 이전값을 기반으로 변환값 설정하는 것이 안전

  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((prev) => !prev)}>Toggle</button>
    </div>
  );
}
