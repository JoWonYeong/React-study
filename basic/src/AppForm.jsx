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
    const { name, value } = e.target;
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
// - 리액트는 상태의 변경이 있을 때 UI변경 일어나야함
// - 하지만 <form> 의 <input> 같은 경우, 리액트의 상태변경이 이루어지지 않아도 UI상으로 입력된게 보여짐
// - 이런 uncontrolled component는 리액트에서 추구하는 원칙과 어긋남
// - state 설정해서 <input>에 바로바로 상태 업데이트 하게 해줘야함
