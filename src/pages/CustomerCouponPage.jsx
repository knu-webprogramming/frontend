import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CustomerCouponPage.css';
import stamp1_activate from '../assets/stamp1-activate.png';
import stamp1_normal from '../assets/stamp1-normal.png';
import Header from '../components/Header';
import axios from 'axios';
import { useSelector } from 'react-redux';

function CustomerCouponPage() {
  const { shopId } = useParams();
  const token = useSelector((state) => state.token.token);
  const [data, setData] = useState({
    storeName: '',
    stampType: 'stamp1',
    maxStamps: 10,
    currentStamps: 0,
    couponBenefit: ''
  });

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const response = await axios.get(`https://api.couponmoa.click/shop/${shopId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const shopData = response.data;
        setData({
          storeName: shopData.name,
          stampType: shopData.stamp_type || 'stamp1',
          maxStamps: shopData.max_stamps,
          currentStamps: 0, // 이 데이터를 어디서 가져오는지에 따라 달라질 수 있습니다.
          couponBenefit: shopData.reward
        });
      } catch (error) {
        console.error('Error fetching shop data:', error);
      }
    };

    fetchShopData();
  }, [shopId, token]);

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