import React, { useState } from 'react';
import Products from './Products';
import { useQueryClient } from '@tanstack/react-query';

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true)
  const [showRightProducts, setShowRightProducts] = useState(true);
  const client = useQueryClient()

  return (
    <main className='container'>
      <div>
        {showLeftProducts && <Products id={'checkbox1'} />}
        <button onClick={() => setShowLeftProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <Products id={'checkbox2'} />}
        <button onClick={() => setShowRightProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <button onClick={()=>{
        // 버튼 누르면 바로 서버에 정보가 업데이트 되고, key에 해당하는 캐시 수동적으로 invalidate(새로고침)돼서 업데이트
        // checked 값 false만 invalidate
        // client.invalidateQueries(['products', false]);
        // 첫번째 key 값으로 'products' 가지는 모든 캐시 invalidate
        client.invalidateQueries(['products']);
      }}>정보가 업데이트 되었음!</button>
    </main>
  );
}

