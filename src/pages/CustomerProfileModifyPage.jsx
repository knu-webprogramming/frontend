import React, { useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import '../styles/CustomerProfileModifyPage.css';
import defaultProfileImage from '../assets/sample.png';

function CustomerProfileModifyPage() {
  const [profileImage, setProfileImage] = useState(null);
  const [nickname,setNickname]=useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };



  const handleCustomerMainClick = () => {
    navigate('/customer/main',{ state: { nickname } });
  };

  return (
    <div className="form-container">
      <h1 className="title">회원 정보 입력</h1>
      <div className="profile-pic-container">
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
      <div className="input-group">
        <label htmlFor="nickname">닉네임</label>
        <input 
        type="text" 
        id="nickname" 
        placeholder=""
        value={nickname}
        onChange={handleNicknameChange}
        />
      </div>
      <button className="submit-button" onClick={handleCustomerMainClick}>수정</button>
    </div>
  );
}

export default CustomerProfileModifyPage;