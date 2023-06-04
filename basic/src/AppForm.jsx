import React, { useState } from 'react';

export default function AppForm() {
  // name, email : 같은 form 에서 입력받는 사용자에 대한 정보이므로
  // 개별적인 상태로 관리하기보다는 하나의 객체로 상태관리 하는 것이 좋음
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    // onSubmit 으로 호출하면 브라우저 내에서 항상 리프레시 (화면 깜빡깜빡)
    // 그 기능 막고 기존 페이지에 계속 머물기 위해 사용
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    // event 발생한 target에 name, value 받아옴
    // 구조분해할당으로 넣으면 변수명과 속성값이 일치하는 값 변수에 들어감
    const { name, value } = e.target;
    // 기존값 유지, 입력받은 새로운 값 덮어쓰기로 변경
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름: </label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>이메일: </label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

// uncontrolled component : 통제되지 않는 컴포넌트
// - 리액트 원칙 : 모든 UI 업데이트는 상태의 변경이 있을 때 발생
// - 하지만 <form> 의 <input> 같은 경우, 입력이 발생했을 때 리액트의 상태변경이 이루어지지 않아도 UI상으로 입력된게 보여짐
// - 이런 uncontrolled component는 리액트에서 추구하는 원칙과 어긋남
// - state 설정해서 <input>에 바로바로 상태 업데이트 하게 해줘야함
