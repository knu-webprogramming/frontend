import React, {useEffect} from 'react';
import { useSelector } from 'react-redux'; // Redux에서 토큰을 가져오기 위해 import
import '../styles/LoginPage.css';
import couponImage from "../assets/logo.png";
import kakaoImage from "../assets/kakao.svg";
import googleImage from "../assets/google.png";
import { useNavigate } from 'react-router-dom';

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
    window.location.href = 'https://api.couponmoa.click/oauth2/authorization/google';
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
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    if (token) {
      navigate('/login/select');
    }
  }, [token, navigate]);

  return (
    <div className="signup-container">
      <img src={couponImage} alt="쿠폰모아" className="logo" />
      <LoginButtons />
    </div>
  );
}

export default LoginPage;