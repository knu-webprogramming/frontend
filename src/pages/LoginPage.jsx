import React from 'react';
import '../styles/LoginPage.css';
import couponImage from "../assets/logo.png";
import kakaoImage from "../assets/kakao.svg";
import googleImage from "../assets/google.png";

function ImageComponent({ src, alt, className }) {
  return <img src={src} alt={alt} className={`button-image ${className}`} />;
}

function TextComponent({ text }) {
  return <span className="button-text">{text}</span>;
}

function ButtonComponent({ imageSrc, imageAlt, imageClassName, text, onClick, className }) {
  return (
    <button className={`signup-button ${className}`} onClick={onClick}>
      <ImageComponent src={imageSrc} alt={imageAlt} className={imageClassName} />
      <TextComponent text={text} />
    </button>
  );
}

function LoginButtons() {
  const handleKakaoLogin = () => {
    window.location.href = `https://api.couponmoa.click/oauth2/authorization/kakao`;
  };

  const handleGoogleLogin = () => {
    window.location.href = '/';
  };

  return (
    <div className="button-container">
      <ButtonComponent 
        imageSrc={kakaoImage} 
        imageAlt="카카오" 
        imageClassName=""
        text="카카오로 시작하기" 
        onClick={handleKakaoLogin} 
        className="kakao"
      />
      <ButtonComponent 
        imageSrc={googleImage} 
        imageAlt="구글" 
        imageClassName=""
        text="구글로 시작하기" 
        onClick={handleGoogleLogin} 
        className="google"
      />
    </div>
  );
}

function LoginPage() {
  return (
    <div className="signup-container">
      <img src={couponImage} alt="쿠폰모아" className="logo" />
      <LoginButtons />
    </div>
  );
}

export default LoginPage;