import React, { useState, useEffect } from 'react';
import '../styles/StartPage.css';
import couponImage from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    const navigateTimeout = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(navigateTimeout); // 컴포넌트가 언마운트되면 타이머 정리
    };
  }, [navigate]);

  return (
    <div className="start-container">
      <img src={couponImage} alt="쿠폰모아" className="start-logo" />
      <div className="start-text"> This page will redirect to login page in {countdown} seconds.</div>
    </div> 
  );
}

export default StartPage;