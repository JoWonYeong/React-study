import React, { useContext } from 'react';
import './AppTheme.css';
import { DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
  return (
    // 원하는 하위 컴포넌트에 우산 씌어주기
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

function Header() {
  return <header className='header'>Header</header>;
}

function Main() {
  return (
    <main className='main'>
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <p>DarkMode: </p>
      <button>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className='footer'>Footer</footer>;
}
