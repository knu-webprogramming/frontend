import React, { useState } from 'react';
import '../styles/CustomerProfileModifyPage.css';
import defaultProfileImage from '../assets/sample.png';

function CustomerProfileModifyPage() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
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
        <input type="text" id="nickname" placeholder="안뇽" />
      </div>
      <button className="submit-button">수정</button>
    </div>
  );
}

export default CustomerProfileModifyPage;