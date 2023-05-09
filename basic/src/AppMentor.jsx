import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: '엘리',
    title: '개발자',
    mentor: {
      name: '밥',
      title: '시니어개발자',
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          // setPerson((prev) => ({
          //   ...prev,
          //   mentor: { name: name, title: prev.mentor.title },
          // }));
          // object의 key와 value를 나타내는 변수 이름이 동일하면 축약 가능
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name },
          }));
        }}>
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          // setPerson((prev) => ({
          //   ...prev,
          //   mentor: { name: prev.mentor.name, title: title },
          // }));
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title },
          }));
        }}>
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}