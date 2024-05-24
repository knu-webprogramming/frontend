import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OwnerMainPage.css';
import sampleImage from '../assets/sample.png';

const CustomerMainPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="customer-main-page">
      <div className="header">
        <img src={sampleImage} alt="Profile" className="profile-icon" onClick={handleRedirect} />
        <img src={sampleImage} alt="Notifications" className="notification-icon" onClick={handleRedirect} />
      </div>
      <div className="content">
        <div className="avatar">
          <img src={sampleImage} alt="Avatar" />
        </div>
        <div className="welcome-text">
          <span className="highlight">바바리안</span> 점주님,
          <br />
          안녕하세요
        </div>
        <div className="logout-container">
          <span className="logout-button" onClick={handleRedirect}>로그아웃</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerMainPage;