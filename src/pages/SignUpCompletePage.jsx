import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpCompletePage.css';

function SignUpCompletePage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="signup-complete-page">
      <p className="complete-message">회원가입이 완료되었습니다</p>
      <p className="redirect-link" onClick={handleRedirect}>돌아가기</p>
    </div>
  );
}

export default SignUpCompletePage;