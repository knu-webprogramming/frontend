import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Redux에서 토큰을 가져오기 위해 import
import axios from 'axios'; // axios를 import
import '../styles/CustomerProfilePage.css';
import defaultProfileImage from '../assets/profileimage.png';
import userDefaultImage from '../assets/user.png'; // 기본 이미지 파일

function CustomerProfilePage() {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // 업로드된 파일을 저장
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token); // Redux에서 토큰을 가져옴
  console.log(token)

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageFile(e.target.files[0]); // 파일 저장
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCustomerMainClick = async () => {
    const formData = new FormData();
    formData.append('name', name);

    if (imageFile) {
      formData.append('image', imageFile);
    } else {
      // 기본 이미지를 포함시키기 위해 Blob을 생성합니다.
      try {
        const response = await fetch(userDefaultImage);
        const blob = await response.blob();
        formData.append('image', blob, 'user.png');
      } catch (error) {
        console.error('Error fetching default image:', error);
        return;
      }
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

      // API 호출이 성공한 경우
      navigate('/customer/main', { state: { name } });
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
      console.error('Response:', error.response); // 서버에서 반환된 오류 메시지 출력
    }
  };

  return (
    <div className="form-container">
      <h1 className="profile-title">회원 정보 입력</h1>
      <div className="profile-pic-container">
        <input
          type="file"
          id="image"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="image" className="profile-pic-label">
          {image ? (
            <img src={image} alt="Profile" className="profile-pic" />
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
      <button className="customer-submit-button" onClick={handleCustomerMainClick}>등록</button>
    </div>
  );
}

export default CustomerProfilePage;