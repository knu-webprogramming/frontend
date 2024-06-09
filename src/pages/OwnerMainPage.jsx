import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OwnerMainPage.css';
import logoexImage from '../assets/cafelogo.png';
import profileImage from '../assets/user.png';
import notificationImage from '../assets/mainnotification.png';


const OwnerMainPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  const handleModifyOwnerClick = () => {
    navigate('/owner/profile/modify');
  };

  const handleApprovalClick = () => {
    navigate('/owner/approval');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="owner-main-page">
      <div className="header">
        <img src={profileImage} alt="Profile" className="profile-icon" onClick={handleModifyOwnerClick} />
        <img src={notificationImage} alt="Notifications" className="notification-icon" onClick={handleApprovalClick} />
      </div>
      <div className="content">
        <div className="avatar">
          <img src={logoexImage} alt="Avatar" />
        </div>
        <div className="welcome-text">
          <span className="highlight">바바리안</span> 점주님,
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

export default OwnerMainPage;