import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import '../styles/CustomerMainPage.css';
import sampleImage from '../assets/user.png';
import profileImagePlaceholder from '../assets/user.png';
import couponlistImage from '../assets/couponlist.png';
import { clearToken } from '../redux/slices/tokenSlice';

const CustomerMainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const [profileData, setProfileData] = useState({ name: '고객', profileImageUrl: profileImagePlaceholder });

  
  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchProfileData = async () => {
      try {
        const response = await axios.get('https://api.couponmoa.click/customer', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setProfileData({
            name: response.data.name,
            profileImageUrl: `https://${response.data.profileImageUrl}`,
          });
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [token]);

  const handleModifyCustomerClick = () => {
    navigate('/customer/profile/modify');
  };

  const handleCouponListClick = () => {
    navigate('/customer/coupon-box');
  };

  const handleLoginClick = () => {
    dispatch(clearToken());
    navigate('/');
  };

  const handleClick = () => {
    navigate('/customer/main');
  };

  return (
    <div className="customer-main-page">
      <div className="customer-main-header ">
        <img src={profileData.profileImageUrl} alt="Profile" className="profile-icon" onClick={handleModifyCustomerClick} />
        <h1 className="costomer-main-title" onClick={handleClick}>쿠폰모아</h1>
        <img src={couponlistImage} alt="Coupon List" className="couponlist-icon" onClick={handleCouponListClick} />
      </div>

      <div className="content">
        <div className="avatar">
          <img src={profileData.profileImageUrl} alt="Avatar" />
        </div>
        <div className="welcome-text">
          <span className="highlight" onClick={handleModifyCustomerClick}>{profileData.name}</span> 고객님,
          <br />
          안녕하세요
        </div>
        </div>
        <div className="logout-container">
          <span className="logout-button" onClick={handleLoginClick}>로그아웃</span>
        </div>
    </div>
  );
};

export default CustomerMainPage;