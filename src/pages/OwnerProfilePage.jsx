import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../styles/OwnerProfilePage.css';
import couponaddImage from '../assets/couponadd.png';
import couponImage from '../assets/coupon.png';
import defaultProfileImage from '../assets/profileimage.png';
import KakaoMapProfile from '../components/KakaoMapProfile';
import glassesImage from '../assets/glasses.png';

const OwnerProfilePage = () => {
  const navigate = useNavigate();
  const [storeName, setStoreName] = useState('');
  const [address, setAddress] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [couponBenefit, setCouponBenefit] = useState('');
  const [stampCount, setStampCount] = useState('10');
  const [stampType, setStampType] = useState('');
  const [selectedCoupon, setSelectedCoupon] = useState('');
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const token = useSelector((state) => state.token.token);

  const handleRedirect = () => {
    navigate('');
  };

  const handleOwnerMainClick = async () => {
    if (!storeName || !address || !ownerName || !phoneNumber || !couponBenefit || !lat || !lng || !stampType) {
      alert("모든 정보를 입력한 후 등록해주세요.");
      return;
    }

    if (!imageFile) {
      alert("프로필 사진을 추가한 후 등록해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append('name', storeName);
    formData.append('phoneNum', phoneNumber);
    formData.append('ownerName', ownerName);
    formData.append('maxStamps', stampCount);
    formData.append('reward', couponBenefit);
    formData.append('placeName', storeName);
    formData.append('addressName', address);
    formData.append('y', lat);
    formData.append('x', lng);
    formData.append('image', imageFile);
    formData.append('stampType', stampType);

    // 모든 정보를 console.log로 출력
    console.log({
      storeName,
      address,
      ownerName,
      phoneNumber,
      couponBenefit,
      stampCount,
      stampType,
      lat,
      lng,
      imageFile
    });

    try {
      const response = await axios.post('https://api.couponmoa.click/shop', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      navigate('/owner/main');
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
      console.error('Response:', error.response);
    }
  };

  const handleMapRedirect = () => {
    setIsMapOpen(true);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
      setImageFile(e.target.files[0]);
    }
  };

  const formatPhoneNumber = (number) => {
    const cleanNumber = number.replace(/\D/g, '');
    const match = cleanNumber.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return number;
  };

  const handlePhoneNumberChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  const handlePlaceSelect = (place) => {
    if (place) {
      setStoreName(place.name);
      setAddress(place.address);
      setLat(place.lat);
      setLng(place.lng);
    }
    setIsMapOpen(false);
  };

  const closeMap = () => {
    setIsMapOpen(false);
  };

  const handleCouponClick = (type) => {
    setStampType(type);
    console.log(type);
    setSelectedCoupon(type);
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
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div className="form-group">
          <label>쿠폰 모양</label>
          <div className="coupon-selection">
            <img 
              src={couponImage} 
              alt="Coupon" 
              onClick={() => handleCouponClick('type1')} 
              className={selectedCoupon === 'type1' ? 'selected' : ''} 
            />
            <span>or</span>
            <img 
              src={couponaddImage} 
              alt="Add Coupon" 
              onClick={() => handleCouponClick('type2')} 
              className={selectedCoupon === 'type2' ? 'selected' : ''} 
            />
          </div>
        </div>
        <div className="form-group">
          <label>도장 개수</label>
          <select value={stampCount} onChange={(e) => setStampCount(e.target.value)}>
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