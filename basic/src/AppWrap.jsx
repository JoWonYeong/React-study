import React from 'react';

export default function AppWrap() {
  // Component Wrapping
  // - 상위 컴포넌트가 하위 컴포넌트 구성요소를 감싼다
  // - 장점: 틀만 같고 안에 요소는 원하는 곳에서 원하는 컨텐츠를 넣어서 생성 가능
  // - 예시로 section, article 등의 틀은 같고 안의 내용이 다른 경우 유용
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
          name='Bob'
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>

      <Navbar>
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

// 하위 컴포넌트 children 객체를 받는다
function Navbar({ children }) {
  return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}
