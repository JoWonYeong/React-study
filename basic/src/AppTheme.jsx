import React, { useContext } from 'react';
import './AppTheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
  return (
    // 원하는 하위 컴포넌트에 우산 씌어주기
    // 다크모드의 경우 최상위 컴포넌트에 영향 줌
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
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  // 전역으로 사용하는 다크모드 context를 useContext() 통해 가져와서 사용
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: 'black', color: 'white' }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={toggleDarkMode}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className='footer'>Footer</footer>;
}
