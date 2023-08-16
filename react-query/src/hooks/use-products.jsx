import { useEffect, useState } from "react";

export default function useProducts({salesOnly}){
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    console.log('fetching in Hook...');
    
    setLoading(true);
    setError(undefined);
    
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log('🔥데이터를 네트워크에서 받아옴');
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