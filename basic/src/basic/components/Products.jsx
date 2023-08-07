import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState()
  // const [products, setProducts] = useState([]);
  // 위 3개의 상태를 custom hook으로 빼서 다른 컴포넌트에서도 사용 가능하게
  const [loading, error, products] = useProducts({salesOnly:checked})
  const handleChange = () => setChecked((prev) => !prev);

  // 아래 로직 custom hook으로 뺌
  // useEffect(() => {
  //   setLoading(true);
  //   setError(undefined);
  
  //   fetch(`data/${checked ? 'sale_' : ''}products.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error)=>{setError('에러 발생')})
  //     .finally(()=>{setLoading(false)}) ;

  //   useEffect 끊길 때 실행
  //   return () => {
  //     console.log('unmount될 때 실행');
  //   };
  // }, [checked]);

  // 로딩 시 리턴
  if(loading) return <p>Loading...</p>
  // 에러 발생 시 리턴
  if(error) return <p>{error}</p>

  return (
    <>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only hot Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
