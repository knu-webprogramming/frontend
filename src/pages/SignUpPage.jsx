import React from 'react';
import '../styles/SignUpPage.css';
import couponImage from "../assets/sample.png";
import kakaoImage from "../assets/sample.png";
import naverImage from "../assets/sample.png";
import googleImage from "../assets/sample.png";

function SignUpPage () {
  const handleLoginRedirect = () => {
    window.location.href = '/';
  };

  return (
    <div className="signup-container">
      <img src={couponImage} alt="쿠폰모아" className="logo" />
      <div className="button-container">
        <button className="signup-button kakao" onClick={handleLoginRedirect}>
          <img src={kakaoImage} alt="카카오톡" />
          카카오톡으로 시작하기
        </button>
        <button className="signup-button naver" onClick={handleLoginRedirect}>
          <img src={naverImage} alt="네이버" />
          네이버로 시작하기
        </button>
        <button className="signup-button google" onClick={handleLoginRedirect}>
          <img src={googleImage} alt="구글" />
          구글로 시작하기
        </button>
      </div>
      <a href="/login" className="login-link">로그인</a>
    </div>
  );
};

export default SignUpPage;