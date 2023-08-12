## 📌PostCSS

### components/Button1.module.css, components/Button2.module.css
- 순수 css
- css 파일의 이름에 확장자 이전에 .module 붙여줌
   객체명으로 import
   사용할 태그에서 className={객체명} 
- 일반 css 규칙과 동일하나 파일별로 모듈성이 생김
- 같은 클래스 명을 사용하는 다른 css 파일을 import할 때 덮어씌어지지 않음
- PostCSS에서 자동으로 컴포넌트이름과 고유 id를 붙여서 class 이름 생성

## 📌styled-components

### StyledComponent.jsx
- css-in-js : js 파일 안에서 css 문법을 사용할 수 있는 라이브러리
- css 파일 만들지 않고 js 파일 안에서 스타일링 된 컴포넌트 생성
- 컴포넌트 형태이기 때문에 React, React-native 환경에서만 사용 가능
- 재컴파일 돼야 해서 성능이 좋지 않음 
- 재컴파일 동작 과정 : client에서 js 다운로드 -> js코드를 css로 만듦 -> 해당하는 클래스 이름을 요소에 연결

## 📌Tailwind CSS
### TailwindComponent.jsx
- 순수 css
- 공식 사이트에 나와있는 순서대로 설치 후 설정
  https://tailwindcss.com/docs/installation
- 미리 css 스타일링이 정의된 클래스명을 조합해서 스타일링 하는 방법
  부트스트랩처럼 미리 만들어진 UI 컴포넌트를 재공해주는게 아님!
  원하는 색상이나 크기 config에서 미리 설정해서 사용 가능
- 공통적으로 사용하는 스타일링 @apply로 재사용 가능
