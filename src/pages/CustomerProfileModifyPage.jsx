import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../styles/CustomerProfileModifyPage.css';
import defaultProfileImage from '../assets/sample.png';

function CustomerProfileModifyPage() {
  const [profileImage, setProfileImage] = useState(null);
  const [image, setImage] = useState(null); // 업로드된 파일을 저장
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token); // Redux에서 토큰을 가져옴

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('https://api.couponmoa.click/customer', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const data = response.data;
          setName(data.name);
          if (data.profileImageUrl) {
            setProfileImage(data.profileImageUrl);
          } else {
            setProfileImage(defaultProfileImage);
          }
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [token]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]); // 파일 저장
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCustomerMainClick = async () => {
    const formData = new FormData();
    formData.append('name', name);

    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('https://api.couponmoa.click/customer', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      navigate('/customer/main', { state: { name } });
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
      if (error.response) {
        console.error('Response:', error.response.data);
      }
    }
  };

  return (
    <div className="form-container">
      <h1 className="title">회원 정보 수정</h1>
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
        <label htmlFor="name">닉네임</label>
        <input
          type="text"
          id="name"
          placeholder="사용할 닉네임을 입력하세요"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <button className="submit-button" onClick={handleCustomerMainClick}>수정</button>
    </div>
  );
}

export default CustomerProfileModifyPage;