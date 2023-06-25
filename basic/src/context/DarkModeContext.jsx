import { createContext, useState } from 'react';

// Context 만들 때는 항상 Provider 같이 만들어 줘야함
// Context : data 담는 곳
// Provider : data 보여주는 우산

export const DarkModeContext = createContext();

// 우산 컴포넌트
// 밑의 하위 요소들 감싸주는 상위 컴포넌트
// UI적으로 변경시켜주는 것은 없지만, children(data)을 감싸는 우산 역할
export function DarkModeProvider({ children }) {
  // 전역으로 사용되는 data, 그 data 처리하는 함수들 여기 안에서 만들면 됨
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    // 하위 컴포넌트와 공유하고 싶은 값들 value로 지정
    // 아래 경우 키와 밸류값(변수명) 같아서 축약
    <DarkModeProvider.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeProvider.Provider>
  );
}
