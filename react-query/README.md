# React Query 라이브러리
- 공식문서 : https://tanstack.com/query/latest
- 블로그 글 
  https://velog.io/@wswy17/React-React-Query-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0
  https://velog.io/@wswy17/React-React-Query-%EC%A0%84%EC%9A%A9-Devtools
  https://velog.io/@wswy17/React-React-Query-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-staleTime-cacheTime

## 📌Hook 특징과 문제점
- Hook은 안에 있는 상태를 여러 컴포넌트에서 재사용 하는 것이 아님
- Hook을 호출하는 컴포넌트마다 각각 다른 내부 상태들을 가지며, 사용할 때 마다 각각 로직 수행(네트워크 통신을 하는 Hook인 경우 각각 네트워크 통신 발생)
- 문제점 : 캐시(cache) 안됨, 재시도(retry) 기능 없음

## 📌useQuery
- 첫번째 인자 : key 
  네트워크 통신별로 각각 고유한 key를 가짐
  받아온 데이터를 key 이름으로 메모리에 보관
- 두번째 인자 : 네트워크 통신 함수
  네트워크 통신 통해 데이터 받아오는 함수, 받아온 데이터 Promise 형태로 값 리턴
- 세번째 인자 : options
```javascript
const query = useQuery({ queryKey: ['todos'], queryFn: fetchTodos });
```
### key 특징
- key 기준으로 캐싱되기 때문에 고유한 key값을 잘 정하는게 중요
- key는 배열로 설정해 더 세밀하게 key들의 조합을 만듦

## 📌React Query 기본 사용시 문제점
- 생각한 것과 다르게 너무 빈번한 네트워크 통신 발생
  이유: 네트워크 통신 하자마자 stale(오래됨) 상태가 돼서 useQuery 써도 계속 새로 받아옴
- 캐시된 데이터의 stale은 기본적으로 0, 변경 위해서는 query별로 `staleTime`옵션을 사용해야함

### staleTime
- 데이터가 `fresh` -> `stale` 상태로 변경되는데 걸리는 시간(기본값 : 0)
- `fresh` 상태일 때 같은 key 값을 가지는 새로운 query가 생성되면 네트워크 통신 발생X
- `stale` 상태일 때 캐시되어있어서 UI 상으로 바로 보여지기는 하지만, background에서 네트워크에 요청해서 데이터 받아와서 업데이트됨

### cacheTime 
- 데이터가 `inactive` 상태일 때 캐싱된 상태로 남아있는 시간 (기본값 : 5m)
- `inactive` : query 요청이 끝나고 데이터가 현재 컴포넌트나 어플리케이션의 화면에 표시되지 않거나 사용되지 않는(활성화되지 않은) 상태
- `cacheTime`이 끝나면 가비지 콜렉터로 수집됨
- `cacheTime`이 지나기 전에 query 다시 요청 되면, 데이터를 fetch하는 동안 캐시 데이터를 보여준다.
- `staleTime`과 상관없이 데이터가 `inactive`된 시점을 기준으로 캐시 삭제 결정
