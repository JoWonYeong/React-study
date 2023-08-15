import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      {/* 
      <Link to=''>
      <a>성격 + 페이지에서 라우팅을 가능하게 함 
      */}
      <Link to={'/'}>Home</Link>
      <Link to={'/videos'}>Videos</Link>
    </nav>
  );
}

