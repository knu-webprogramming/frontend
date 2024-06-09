import React from 'react';
import '../styles/LoginPage.css';
import couponImage from "../assets/logo.png";
import kakaoImage from "../assets/kakao.svg";
import naverImage from "../assets/naver.JPG";
import googleImage from "../assets/google.png"

function LoginPage () {
  const handleLoginRedirect = () => {
    window.location.href = '/';
  };

  return (
    <div className="login-container">
      <img src={couponImage} alt="쿠폰모아" className="logo" onClick={handleLoginRedirect} />
      <div className="button-container">
        <button className="login-button kakao" onClick={handleLoginRedirect}>
          <img src={kakaoImage} alt="카카오톡" />
          <div className="button-text">카카오로 로그인하기</div>
        </button>
        <button className="login-button naver" onClick={handleLoginRedirect}>
          <img src={naverImage} alt="네이버" />
          <div className="button-text">네이버로 로그인하기</div>
        </button>
        <button className="login-button google" onClick={handleLoginRedirect}>
          <img src={googleImage} alt="구글" />
          <div className="button-text">구글로 로그인하기</div>
        </button>
      </div>
      <a href="/signup" className="signup-link">회원가입</a>
    </div>
  );
};

export default LoginPage;