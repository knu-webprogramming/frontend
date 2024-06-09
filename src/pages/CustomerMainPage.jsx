import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import '../styles/CustomerMainPage.css';
import sampleImage from '../assets/user.png';
import profileImage from '../assets/user.png';
import couponlistImage from '../assets/couponlist.png';

const CustomerMainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const nickname = location.state?.nickname || '고객';
  
  const handleModifyCustomerClick = () => {
    navigate('/customer/profile/modify');
  };

  const handleCouponListClick = () => {
    navigate('/customer/coupon-box');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleClick = () => {
    navigate('/customer/main');
  };

  return (
    <div className="customer-main-page">
      <div className="header">
        <img src={profileImage} alt="Profile" className="profile-icon" onClick={handleModifyCustomerClick} />
        <h1 className="title" onClick={handleClick}>쿠폰모아</h1>
        <img src={couponlistImage} alt="coupinlist" className="couponlist-icon" onClick={handleCouponListClick} />
      </div> 
      
      <div className="content">
        <div className="avatar">
          <img src={sampleImage} alt="Avatar" />
        </div>
        <div className="welcome-text">
          <span className="highlight" onClick={handleModifyCustomerClick}>{nickname}</span> 고객님,
          <br />
          안녕하세요
        </div>
        <div className="logout-container">
          <span className="logout-button" onClick={handleLoginClick}>로그아웃</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerMainPage;