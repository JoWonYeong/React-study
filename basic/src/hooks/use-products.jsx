import { useEffect, useState } from "react";

// 재사용 가능한 custom hook의 이름은 use-로 시작하는 것이 일반적
// Hooks은(함수들은) 값의 재사용이 아니라 '로직의 재사용'을 위한 것
// 일반 컴포넌트와 차이점
// 일반 컴포넌트 : UI jsx return

export default function useProducts({salesOnly}){
  // custom hook 안에서 재사용할 내부 상태 가져옴
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    })
    .catch((error) => {
      setError('에러 발생');
    })
    .finally(() => {
      setLoading(false);
    });
    
    // useEffect 끊길 때 실행
    return () => {
      console.log('unmount될 때 실행');
    };
  }, [salesOnly]);
  
  // custom hook : 외부와 공유하고 싶은 데이터 return
  return [loading, error, products]
}