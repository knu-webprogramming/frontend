import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CustomerCouponPage.css';
import sample from '../assets/sample.png';
import Header from '../components/Header';
import backImage from '../assets/back.png';

function CustomerCouponPage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };
  const handleCouponClick = () => {
    navigate('/');
  };


  return (
    <div className="coupon-container">
      <header className="header">
      <div className="profile-icon" onClick={handleCouponClick}>
          <img src={backImage} alt="Back Icon" />
        </div>
        <h1 className="title" onClick={handleRedirect}>바바리안</h1>
        </header>
      {/* <Header
        title={"바바리안"}
      /> */}
      <div className="description">
        도장 10개 모을 시 음료 한잔 무료 제공
      </div>
      <div className="stamps">
        {Array.from({ length: 10 }).map((_, index) => (
          <img
            key={index}
            src={sample}
            alt="stamp"
            className={`stamp ${index < 6 ? 'active' : 'inactive'}`}
          />
        ))}
      </div>
      <button className="stamp-button" onClick={handleRedirect}>
        도장 찍기
      </button>
      <button className="coupon-button" onClick={handleRedirect} disabled>
        쿠폰 사용하기
      </button>
    </div>
  );
}

export default CustomerCouponPage;