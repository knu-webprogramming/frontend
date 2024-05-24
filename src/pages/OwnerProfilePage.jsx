import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OwnerProfilePage.css';
import sampleImage from '../assets/sample.png';

const OwnerProfilePage = () => {
  const navigate = useNavigate();
  const [storeName, setStoreName] = useState('');
  const [address, setAddress] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [couponBenefit, setCouponBenefit] = useState('');

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="title">가게 정보 입력</h1>
      <div className="profile-image">
        <img src={sampleImage} alt="Profile" />
      </div>
      <form className="form">
        <div className="form-group">
          <label>가게명</label>
          <input
            type="text"
            placeholder="가게명을 입력하세요"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>주소</label>
          <input
            type="text"
            placeholder="주소를 입력하세요"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            <img src={sampleImage} alt="Coupon" onClick={handleRedirect} />
            <span>or</span>
            <img src={sampleImage} alt="Add Coupon" onClick={handleRedirect} />
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
        <button type="button" className="submit-button" onClick={handleRedirect}>등록</button>
      </form>
    </div>
  );
};

export default OwnerProfilePage;