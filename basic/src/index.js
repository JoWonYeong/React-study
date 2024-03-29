import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProducts from './basic/AppProducts';
// import AppXY from './AppXY'
// import AppMentor from './AppMentor';
// import AppMentors from './AppMentors'
// import AppMentorsReducer from './AppMentorsReducer';
// import AppMentorsImmer from './AppMentorsImmer';
// import AppForm from './AppForm';
// import AppWrap from './AppWrap';
// import AppCard from './AppCard';
// import AppTheme from './AppTheme';
// import AppMeontorButton from './AppMentorsButton';

import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProducts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
