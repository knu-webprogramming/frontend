import React from 'react';
import '../styles/StartPage.css';
import couponImage from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 정리
  }, [navigate]);

  return (
 <div className="start-container">
      <img src={couponImage} alt="쿠폰모아" className="start-logo" />
    <div className="start-text"> This page will redirect to login page in 3 seconds.</div>
    </div> 
  );
}

export default StartPage;