import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  // params : {videoId : 값}
  // 키는 app.js에서 설정한 값
  const params = useParams();
  console.log(params);

  // 구조분해할당으로 바로 선언
  const { videoId } = useParams();

  return <div>Video Id : {videoId}</div>;
}
