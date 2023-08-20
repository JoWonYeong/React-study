import React, { useState } from 'react';
// import useProducts from '../hooks/use-products';
import { useQuery } from '@tanstack/react-query';

export default function Products({id}) {
  const [checked, setChecked] = useState(false);
  // custom hook 사용해 네트워크 통신
  // const [loading, error, products] = useProducts({salesOnly:checked})

  // custom hook을 사용하지 않고 react-query로 네트워크 통신
  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });
  // useQuery API 활용법: https://tanstack.com/query/latest/docs/react/reference/useQuery
  const {
    // 구조분해할당으로 받아온 data 값을 'products'라는 이름으로 저장
    data: products,
    isLoading,
    error,
  } = useQuery(['products', checked], async () => { // checked 여부에 따라 다른 네트워크 요청을 하므로 key에 추가
    // custom hook을 사용한 경우 'fetching...' 두번 찍힘
    // useQuery() 사용한 경우 'fetching...' 한번 찍힘
    console.log('fetching in useQuery...', checked);
    return fetch(`data/${checked?'sale_':''}products.json`).then((res) => res.json());
  }, {
    // options 추가
    staleTime: 1000 * 60 * 5, 
  });
  const handleChange = () => setChecked((prev) => !prev);

  // 로딩 시 리턴
  if (isLoading) return <p>Loading...</p>;
  // 에러 발생 시 리턴
  if (error) return <p>{error}</p>;

  return (
    <div className='product'>
      <input
        id={id}
        type='checkbox'
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>Show Only hot Sale</label>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
