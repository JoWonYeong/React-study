# React Query 라이브러리
- 공식문서 : https://tanstack.com/query/latest
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
  이유: Devtool에서 볼이듯 네트워크 통신 하자마자 stale(오래됨) 상태로 되어있기 때문에, useQuery() 썼지만 계속 새로 받아옴 (콘솔에서 보면 계속 'fetching...' 찍힘)
- 공식문서에 따르면, `useQuery` 혹은 `useInfiniteQuery`를 사용하면 캐시된 데이터는 stale 상태로 간주
  이것을 변경하기 위해서는 query별로 `staleTime`옵션을 사용해야함
사진

### staleTime
- 데이터가 `fresh` -> `stale` 상태로 변경되는데 걸리는 시간(기본값 : 0)
  한 번 네트워크에서 받아온 데이터 얼마동안 신선하다고 간주할 것인지 정해줌
- `fresh` 상태일 때 같은 key 값을 가지는 새로운 query가 생성되면 네트워크 통신 발생X
- `stale` 상태일 때 캐시되어있어서 UI 상으로 바로 보여지기는 하지만, background에서 네트워크에 요청해서 데이터 받아와서 업데이트됨

### cacheTime 
- 데이터가 `inactive` 상태일 때 캐싱된 상태로 남아있는 시간 (기본값 : 5m)
- query 요청이 끝나면 데이터는 `inactive` 상태로 변경되고, 캐시는 `cacheTime`만큼 유지됨
- `cacheTime`이 끝나면 가비지 콜렉터로 수집됨
- `cacheTime`이 지나기 전에 query 다시 요청 되면, 데이터를 fetch하는 동안 캐시 데이터를 보여준다.
- `staleTime`과 상관없이 데이터가 `inactive`된 시점을 기준으로 캐시 삭제 결정
- 무조건 캐시를 길게하는게 아니라, 데이터가 백엔드에서 빈번히 업데이트 되는지, 사용자가 오랫동안 캐시를 해도 괜찮은지 판단해서 시간적절하게 정해야 함


## 📌React Query 사용한 네트워크 통신 과정
1. 컴포넌트 A에서 useQuery() 사용하면, key에 해당하는 데이터가 메모리에 있는지 확인
2. 메모리에 없다면, 네트워크 통신을 통해 데이터 받아와서 메모리에 저장 후 가져옴
3. 컴포넌트 B에서 같은 key 값으로 useQuery() 사용하면 해당 데이터가 메모리에 존재하기 때문에 네트워크 통신을 하지 않고 캐시된 데이터를 가져옴

=> 두 컴포넌트에서 요청했지만, 통신 한번 함!


**블로그 참고**
A 쿼리 인스턴스가 mount 됨
네트워크에서 데이터 fetch 하고 A라는 query key로 캐싱함
이 데이터는 fresh 상태에서 staleTime(기본값 0) 이후 stale 상태로 변경됨
A 쿼리 인스턴스가 unmount 됨
캐시는 cacheTime(기본값 5min) 만큼 유지되다가 가비지 콜렉터로 수집됨
만일 cacheTime이 지나기 전에 A 쿼리 인스턴스가 새롭게 mount되면, fetch가 실행되고 fresh한 값을 가져오는 동안 캐시 데이터를 보여줌
