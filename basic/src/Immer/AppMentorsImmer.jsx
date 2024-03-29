import React, { useState } from 'react';
import { useImmer } from 'use-immer';

export default function AppMentor(props) {
  const [person, updatePerson] = useImmer(initialPerson);

  // 멘토의 이름 바꾸기
  const handleUpdate = () => {
    const prevName = prompt('누구의 이름을 바꾸고 싶은가요?');
    const currentName = prompt('이름을 무엇으로 바꾸고 싶은가요?');

    updatePerson((prevPerson) => {
      const mentor = prevPerson.mentors.find((m) => m.name === prevName);
      mentor.name = currentName;
    });
  };

  // 멘토의 추가하기
  const handleAdd = () => {
    const name = prompt('멘토의 이름을 입력해주세요');
    const title = prompt('멘토의 타이틀을 입력해주세요');

    updatePerson((prevPerson) => {
      prevPerson.mentors.push({ name, title });
    });
  };

  // 멘토 삭제하기
  const handleDelete = () => {
    const name = prompt('삭제할 멘토의 이름을 입력해주세요');
    updatePerson((prevPerson) => {
      // 방법 1
      // const index = prevPerson.mentors.findIndex((m) => m.name === name);
      const index = prevPerson.mentors.findIndex((m) => m.name === name);
      prevPerson.mentors.splice(index, 1);

      // 방법 2
      /*
      const deletedMentors = prevPerson.mentors.filter((v) => v.name !== name);
      prevPerson.mentors = deletedMentors;
      */
    });
  };

  return (
    <div>
      <h1>
        Immer <br />
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

      {/* 멘토의 이름 바꾸는 버튼 */}
      <button onClick={handleUpdate}>멘토의 이름 바꾸기</button>

      {/* 멘토 추가하는 버튼 */}
      <button onClick={handleAdd}>멘토 추가하기</button>

      {/* 멘토 삭제하는 버튼 */}
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
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
