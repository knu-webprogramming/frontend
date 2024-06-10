import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OwnerProfilePage.css';
import couponaddImage from '../assets/couponadd.png';
import couponImage from '../assets/coupon.png';
import profileImage from '../assets/profileimage.png';

const OwnerProfilePage = () => {
  const navigate = useNavigate();
  const [storeName, setStoreName] = useState('');
  const [address, setAddress] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [couponBenefit, setCouponBenefit] = useState('');
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleRedirect = () => {
    navigate('');
  };
  const handleOwnerMainClick = () => {
    navigate('/owner/main');
  };

  const handleMapRedirect = () => {
    console.log('handleMapRedirect called');
    setIsMapOpen(true);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  function handlePlaceSelect(place) {
    console.log('handlePlaceSelect called with:', place);
    if (place) {
      setStoreName(place.name);
      setAddress(place.address);
    }
    setIsMapOpen(false);
  };

  const closeMap = () => {
    setIsMapOpen(false);
  };

  return (
    <div className="ownerprofile-container">
      <h1 className="title">가게 정보 입력</h1>
      <div className="profile-image">
        <input
          type="file"
          id="profileImage"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="profileImage" className="profile-pic-label">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-pic" />
          ) : (
            <img src={defaultProfileImage} alt="Default Profile" className="profile-pic" />
          )}
        </label>
      </div>
      <form className="form">
        <div className="form-group store-name-group">
          <label>가게명</label>
          <input
            type="text"
            placeholder="가게명을 입력하세요"
            value={storeName}
            readOnly
          />
          <img
            src={glassesImage}
            alt="Search Store"
            className="glasses-icon"
            onClick={handleMapRedirect}
          />
        </div>
        <div className="form-group address-group">
          <label>주소</label>
          <input
            type="text"
            placeholder="주소를 입력하세요"
            value={address}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>사업자 이름</label>
          <input
            type="text"
            placeholder="사업자 이름을 입력하세요"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>전화번호</label>
          <input
            type="text"
            placeholder="전화번호를 입력하세요"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>쿠폰 모양</label>
          <div className="coupon-selection">
            <img src={couponImage} alt="Coupon" onClick={handleRedirect} />
            <span>or</span>
            <img src={couponaddImage} alt="Add Coupon" onClick={handleRedirect} />
          </div>
        </div>
        <div className="form-group">
          <label>도장 개수</label>
          <select>
            <option value="10">10개</option>
            <option value="20">20개</option>
            <option value="30">30개</option>
          </select>
        </div>
        <div className="form-group">
          <label>쿠폰 혜택</label>
          <input
            type="text"
            placeholder="쿠폰 혜택을 입력하세요"
            value={couponBenefit}
            onChange={(e) => setCouponBenefit(e.target.value)}
          />
        </div>
        <button type="button" className="submit-button" onClick={handleOwnerMainClick}>등록</button>
      </form>
      {isMapOpen && (
        <div className="modal" onClick={closeMap}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeMap}>&times;</span>
            <KakaoMapProfile onPlaceSelect={handlePlaceSelect} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerProfilePage;