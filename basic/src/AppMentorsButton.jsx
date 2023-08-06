import React, { memo, useCallback, useMemo, useReducer } from 'react';
import personRedcuer from './reducer/person-reducer';

export default function AppMentor(props) {
  const [person, dispatch] = useReducer(personRedcuer, initialPerson);

  // 멘토의 이름 바꾸기
  // 함수를 버튼 누를때마다 매번 만들지 않고 useCallback()으로 감싸줌
  // 의존성배열에 따라 값 변경(useMemo()와 사용법 같음)
  const handleUpdate = useCallback(() => {
    const prevName = prompt('누구의 이름을 바꾸고 싶은가요?');
    const currentName = prompt('이름을 무엇으로 바꾸고 싶은가요?');

    dispatch({ type: 'updated', prevName, currentName });
  }, []);

  // 멘토의 추가하기
  const handleAdd = useCallback(() => {
    const name = prompt('멘토의 이름을 입력해주세요');
    const title = prompt('멘토의 타이틀을 입력해주세요');

    dispatch({ type: 'added', name, title });
  }, []);

  // 멘토 삭제하기
  const handleDelete = useCallback(() => {
    const name = prompt('삭제할 멘토의 이름을 입력해주세요');

    dispatch({ type: 'deleted', name });
  }, []);

  return (
    <div>
      <h1>
        Reducer <br />
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 :
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </p>

      {/* 
      Button 컴포넌트에 props 전달하게 되면, 
      아무리 같은 값을 전달한다해도 매번 컴포넌트 호출할때마다 새로운 props 객체 생성됨
  
      Button 컴포넌트 memo(기억)
      - Button 컴포넌트의 새로운 props 객체의 값이 전의 props 값과 동일하다면 리렌더링 X
      */}
      <Button text={'멘토 이름 바꾸기'} onClick={handleUpdate}></Button>
      <Button text={'멘토 추가하기'} onClick={handleAdd}></Button>
      <Button text={'멘토 삭제하기'} onClick={handleDelete}></Button>
    </div>
  );
}

// 이렇게 memo로 감싸주면 props 같을때 Button 컴포넌트 리렌더링 발생 X
const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering');

  // 컴포넌트 내에서 무거운 작업 발생
  // const result = calculateSomething();
  // 만약 무거운 작업이 매번 발생하는 것이 아니라 처음 딱 한번만 발생해야 한다면 : useEffect()
  // 혹은 dependency(의존성배열)에 따라 useMemo() 사용해서 메모(기억, 캐시)해놓음
  // 의존성배열 딱히 설정안해두면 딱 한번만 실행됨
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}>
      {text}
      {result}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 3000; i++) {
    console.log('^^');
  }
  return 10;
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
