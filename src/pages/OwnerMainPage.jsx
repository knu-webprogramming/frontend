import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import QRCode from 'react-qr-code';
import '../styles/OwnerMainPage.css';
import logoexImage from '../assets/cafelogo.png';
import qrImage from '../assets/qr-code.png';
import { clearToken } from '../redux/slices/tokenSlice';

const OwnerMainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);
  const [profileData, setProfileData] = useState({ name: '점주', profileImageUrl: null });
  const [shopId, setShopId] = useState(null); // shopId 상태 추가
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
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
            profileImageUrl: response.data.profile_image_url ? `http://${response.data.profile_image_url}` : profileImagePlaceholder,
          });

          setShopId(response.data.shop_id); // shopId 설정
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

  const handleQRcodeClick = () => {
    navigate('/owner/qrcode', { state: { shopId } }); // Pass shopId as state
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
      <div className="owner-main-header">
        <img src={profileData.profileImageUrl || profileImagePlaceholder} alt="Profile" className="profile-icon" onClick={handleModifyOwnerClick} />
        <img src={qrImage} alt="Notifications" className="qr-icon" onClick={handleQRcodeClick} />
      </div>

      <div className="content">
        <div className="avatar">
          <img src={profileData.profileImageUrl || profileImagePlaceholder} alt="Avatar" />
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

      {showQRCode && shopId && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <QRCode value={`https://main--coupon-moa.netlify.app/customer/stamp?shopId=${shopId}`} size={256} />
            <QRCode value={`https://main--coupon-moa.netlify.app/customer/coupon/use?shopId=${shopId}`} size={256} style={{ marginTop: '20px' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerMainPage;