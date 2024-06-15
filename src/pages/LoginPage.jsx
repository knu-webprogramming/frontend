import React from 'react';
import '../styles/SignUpPage.css';
import couponImage from "../assets/logo.png";
import kakaoImage from "../assets/kakao.svg";
import naverImage from "../assets/naver.JPG";
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

function SignUpButtons() {
  const handleKakaoLogin = () => {
    window.location.href = `http://3.39.232.19:8080/oauth2/authorization/kakao`;
  };

  const handleLoginRedirect = () => {
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
        onClick={handleLoginRedirect} 
        className="google"
      />
    </div>
  );
}

function SignUpPage() {
  return (
    <div className="signup-container">
      <img src={couponImage} alt="쿠폰모아" className="logo" />
      <SignUpButtons />
    </div>
  );
}

export default SignUpPage;