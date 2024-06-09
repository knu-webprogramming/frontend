import React, { useEffect } from 'react';
import '../styles/SelectPage.css';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import storeImage from '../assets/store.png';
import customerImage from '../assets/customer.png';
import couponImage from '../assets/logo.png';

function SelectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    const { accessToken, refreshToken } = query;

    if (accessToken && refreshToken) {
      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    } 
    else {
      // 토큰이 없으면 오류 처리 (옵션)
      console.error('Tokens are missing');
      navigate('/');
    }
  }, [navigate]);

  const handleStoreClick = () => {
    window.location.href = '/owner/profile';
  };

  const handleCustomerClick = () => {
    window.location.href = '/customer/profile';
  };


  return (
    <div className="select-container">
        <img src={couponImage} alt="Logo" className="logo" onClick={handleCustomerClick} />
      <div className="text">
        <p>어느 유형의 사용자이신가요?</p>
      </div>
      <div className="options">
        <div className="option" onClick={handleStoreClick}>
          <img src={storeImage} alt="Store" className="icon"/>
          <div className="text">
          <p>점주</p>
          </div>
          </div>
        </div>
        <div className="option" onClick={handleCustomerClick}>
          <img src={customerImage} alt="Customer" className="icon" />
          <div className="text">
          <p>고객</p>
          </div>
        </div>
      </div>
  );
}

export default SelectPage;
