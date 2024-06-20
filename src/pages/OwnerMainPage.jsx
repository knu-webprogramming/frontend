import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import QRCode from 'react-qr-code';
import '../styles/OwnerMainPage.css';
import logoexImage from '../assets/cafelogo.png';
import profileImagePlaceholder from '../assets/user.png';
import notificationImage from '../assets/mainnotification.png';
import { clearToken } from '../redux/slices/tokenSlice';

const OwnerMainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const [profileData, setProfileData] = useState({ name: '점주', profileImageUrl: profileImagePlaceholder });
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('https://api.couponmoa.click/shop', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          console.log(response.data);
          setProfileData({
            name: response.data.name,
            profileImageUrl: profileImagePlaceholder,
          });

          if (response.data.profile_image_url) {
            setAvatarUrl(`http://${response.data.profile_image_url}`);
          }
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [token]);

  const handleModifyOwnerClick = () => {
    navigate('/owner/profile/modify');
  };

  const handleApprovalClick = () => {
    setShowQRCode(true);
  };

  const handleLoginClick = () => {
    dispatch(clearToken());
    navigate('/');
  };

  const closeModal = () => {
    setShowQRCode(false);
  };

  return (
    <div className="owner-main-page">
      <div className="header">
        <img src={profileData.profileImageUrl} alt="Profile" className="profile-icon" onClick={handleModifyOwnerClick} />
        <img src={notificationImage} alt="Notifications" className="notification-icon" onClick={handleApprovalClick} />
      </div>

      <div className="content">
        <div className="avatar">
          <img src={avatarUrl} alt="Avatar" />
        </div>
        <div className="welcome-text">
          <span className="highlight">{profileData.name}</span> 점주님,
          <br />
          안녕하세요
        </div>
        <div className="logout-container">
          <span className="logout-button" onClick={handleLoginClick}>로그아웃</span>
        </div>
      </div>

      {showQRCode && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <QRCode value="https://api.couponmoa.click/stamp" size={256} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerMainPage;