# React Router 라이브러리
- 공식문서 : https://reactrouter.com/en/main

## 📌Routing
- 주소창에 url 입력했을 때, 서버에서 요청에 해당하는 데이터 전달하는 것
- 페이지 새롭게 refresh
- 개발자 도구 Network 탭에서 보면 새로운 HMTL을 받아와서 페이지 전체 업데이트

## 📌Client Side Routing
- 페이지 url은 업데이트 되나, 페이지가 새롭게 refresh되는게 아님
- 업데이트 필요한 특정 부분만 데이터 변경됨
- 개발자 도구 Network 탭에서 보면 새로운 HMTL을 받아오는게 아니라 필요한 데이터만 네트워크 통신(fetch)을 통해 받아와서 부분적으로 업데이트

- 대표적으로 **React Router 라이브러리**
- SPA 형태 유지하면서 멀티페이지의 장점 사용 가능

### 멀티페이지의 장점?
- url 경로 달라지니까 history 사용 가능
- url만 복사해두면 홈 컴포넌트가 아닌 원하는 컴포넌트로 바로 접속할 수있음