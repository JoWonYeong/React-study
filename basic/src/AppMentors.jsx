import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState(initialPerson);

  // 멘토의 이름 바꾸기
  const handleUpdate = () => {
    const prevName = prompt('누구의 이름을 바꾸고 싶은가요?');
    const currentName = prompt('이름을 무엇으로 바꾸고 싶은가요?');

    // 리액트에서 사용하는 모든 state는 불변성 유지해야함
    // 변경이 발생할 때 상태의 객체나 배열의 내부 내용을 직접적으로 update X
    // 객체나 배열의 전체적인 껍데기를 새로 만들어서 update 해줘야 함
    // 객체 참조값이 바뀌어야 리액트가 이를 인지함

    setPerson((prevPerson) => ({
      ...prevPerson,
      mentors: prevPerson.mentors.map((mentor, index) => {
        if (mentor.name === prevName) {
          // mentor.prevName = currentName;
          return { ...mentor, name: currentName };
        }
        // mentor.name = current가 되는 이유
        // 결국 mentor 객체를 리턴해주기 때문에
        return mentor;
      }),
    }));
  };

  // 멘토의 추가하기
  const handleAdd = () => {
    const name = prompt('멘토의 이름을 입력해주세요');
    const title = prompt('멘토의 타이틀을 입력해주세요');

    setPerson((prevPerson) => ({
      ...prevPerson,
      mentors: [...prevPerson.mentors, { name, title }],
    }));
  };

  // 멘토 삭제하기
  const handleDelete = () => {
    const name = prompt('삭제할 멘토의 이름을 입력해주세요');
    setPerson((prevPerson) => ({
      ...prevPerson,
      mentors: prevPerson.mentors.filter((v) => v.name !== name),
    }));
  };

  return (
    <div>
      <h1>
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
