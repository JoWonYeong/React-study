// 외부에 위치하기 때문에
// 다른 컴포넌트에서 관련된 로직들 재사용 가능함
// https://react.dev/reference/react/useReducer

export default function personRedcuer(prevPerson, action) {
  switch (action.type) {
    case 'updated': {
      const { prevName, currentName } = action;
      return {
        ...prevPerson,
        mentors: prevPerson.mentors.map((mentor, index) => {
          if (mentor.name === prevName) {
            return { ...mentor, name: currentName };
          }
          return mentor;
        }),
      };
    }
    case 'added': {
      const { name, title } = action;
      return {
        ...prevPerson,
        mentors: [...prevPerson.mentors, { name, title }],
      };
    }
    case 'deleted': {
      return {
        ...prevPerson,
        mentors: prevPerson.mentors.filter((v) => v.name !== action.name),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
}
