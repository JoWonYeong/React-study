import { createContext, useState } from 'react';

// React에서 제공하는 createContext() 활용해 다크모드 Context 생성
// Context : 데이터 저장
export const DarkModeContext = createContext();

// Context 만들 때는 항상 Provider 같이 만들어 줘야함
// Provider : 데이터 보여주는 우산
//            우산 컴포넌트로 밑의 하위 요소들 감싸주는 상위 컴포넌트

// UI적으로 변경시켜주는 것은 없지만, children(data)을 감싸는 우산 역할
export function DarkModeProvider({ children }) {
  // 전역으로 사용되는 데이터와 그 데이터를 처리하는 함수들 여기 안에서 만들면 됨
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    // context에 있는 Provider 사용
    // 하위 컴포넌트와 공유하고 싶은 값들 value로 지정
    // 아래 경우 키와 밸류값(변수명) 같아서 축약
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
