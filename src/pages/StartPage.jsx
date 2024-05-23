import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div>
      <h1>Start Page</h1>
      <p>임시 페이지</p>
      <div><Link to="/login">로그인</Link></div>
      <div><Link to="/signup">회원가입</Link></div>
      <div><Link to="/select">선택 화면</Link></div>
      <div><Link to="/customer/main">고객 메인</Link></div>
      <div><Link to="/owner/main">사장 메인</Link></div>
    </div>
  );
}

export default StartPage;