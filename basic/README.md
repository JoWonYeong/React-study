## 📌state 심화

### AppXY.jsx

- state 활용해 마우스 포인터 위치에 따라서 이동하는 점 만들기

### AppMentor.jsx

- state 안에 객체가 들어있는 객체를 저장하고 있을 때 상태 관리(변경)

### AppMentors.jsx

- state 안에 객체 배열이 들어있는 객체를 저장하고 있을 때 상태 관리(추가, 변경, 삭제)
- 리액트 state 불변성 유지하기

## 📌Reducer

### reducer/AppMentorsReducer.jsx

- AppMentor.jsx에서 state 사용한 것 Reducer 활용해 변경

### reducer/person-reducer.js

- AppMentorsReducer.jsx의 Reducer 함수 작성

## 📌Immer

### Immer/AppMentorsImmer.jsx

- AppMentor.jsx에서 state 사용한 것 Immer 라이브러리 활용해 변경

## 📌Uncontrolled component : 통제되지 않는 컴포넌트

### AppForm.jsx

- Uncontrolled component인 `<form>`을 React 원칙에 맞춰서 사용하기

## 📌Component Wrapping : 컴포넌트의 재사용 방법

### AppWrap.jsx, AppCard.jsx

- 상위컴포넌트가 하위 컴포넌트를 감싸는 방법으로 효율적인 컴포넌트 재사용

## 📌Context API

### context/DarkModeContext.jsx, AppTheme.jsx

- Context API를 사용해 전역으로 상태 관리하기
- DarkModeContext.jsx에서 다크모드를 관리하는 context와 우산을 씌울 Provider 컴포넌트를 만들어서 AppTheme.jsx에 적용

## 📌성능개선 - 불필요한 리렌더링 방지

### AppMentorsButton.jsx

- memo, useMemo, useCallback 이용해 실제 props, state 값 or dependency(의존성배열)가 변경되지 않는 이상 리렌더링 방지
- 처음부터 적용해 코드를 복잡하게 하기보다는, 성능의 문제가 생겼을 때 개선해나가는 용도로 사용

### 비교

#### React.memo 
- 단순 UI 컴포넌트의 리렌더링 방지
- 컴포넌트 리렌더링 계속 되기 때문에, 컴포넌트의 props 객체의 값이 전의 props 값과 다를때만 리렌더링되게 할 때 사용
 
#### useMemo
- 전달받은 함수를 dependency가 변할때만 실행하고, 그 결과값을 보존
- 일반적으로 무거운 작업을 수행하는 함수 전달

#### useCallback
- 전달받은 함수를 보존하고, dependency 변하면 함수 리렌더링해서 리턴

#### useMemo vs useCallback
- useMemo : 함수의 결과값을 가지고 있음
- useCallback : 함수 자체를 가지고 있음
```
useMemo((...)=>fn, deps) === useCallback(fn, deps)
```

## 📌 custom hook
### hooks/use-products.jsx, basic/components/Products.jsx
- loading, error 등 여러 컴포넌트에서 공통으로 사용되는 로직 custom hook 사용해 재사용