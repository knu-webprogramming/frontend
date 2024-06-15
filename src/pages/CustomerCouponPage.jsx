import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CustomerCouponPage.css';
import stamp1_activate from '../assets/stamp1-activate.png';
import stamp1_normal from '../assets/stamp1-normal.png';
import Header from '../components/Header';

function CustomerCouponPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    storeName: '',
    stampType: 'stamp1',
    maxStamps: 10,
    currentStamps: 0,
    couponBenefit: ''
  });

  useEffect(() => {
    fetch('/data/customer-coupon.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading stamp data:', error));
  }, []);

  const handleAddStamp = () => {
    navigate('/customer/coupon/camera'); // 카메라 페이지로 이동
  };

  const handleCouponUse = () => {
    setData(prevData => ({
      ...prevData,
      currentStamps: 0,
    }));
  };

  return (
    <div className="coupon-container">
      <Header title={data.storeName} />
      <div className="content">
        <div className="description">
          도장 {data.maxStamps}개 모을 시 {data.couponBenefit}
        </div>
        <div className="stamps">
          {Array.from({ length: data.maxStamps }).map((_, index) => (
            <img
              key={index}
              src={index < data.currentStamps ? stamp1_activate : stamp1_normal}
              alt="stamp"
              className={`stamp ${index < data.currentStamps ? 'active' : 'inactive'}`}
            />
          ))}
        </div>
      </div>
      <div className="buttons">
        <button 
          className="stamp-button" 
          onClick={handleAddStamp}
          disabled={data.currentStamps >= data.maxStamps}
        >
          도장 찍기
        </button>
        <button 
          className="coupon-button" 
          onClick={handleCouponUse} 
          disabled={data.currentStamps < data.maxStamps}
        >
          쿠폰 사용하기
        </button>
      </div>
    </div>
  );
}

export default CustomerCouponPage;