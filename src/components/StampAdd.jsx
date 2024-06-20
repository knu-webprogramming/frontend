import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const StampAdd = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const shopId = queryParams.get('shopId');
  const token = useSelector((state) => state.token.token);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const addStamp = async () => {
      try {
        const response = await axios.post(`https://api.couponmoa.click/coupon/stamp/${shopId}`, {}, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setAlertMessage('도장이 적립되었습니다');
          navigate(`/customer/coupon/${shopId}`, { replace: true });
        }
      } catch (error) {
        console.error('Error adding stamp:', error);
        setAlertMessage('도장 적립에 실패했습니다.');
        navigate(`/customer/coupon/${shopId}`, { replace: true });
      }
    };

    if (shopId) {
      addStamp();
    }
  }, [shopId, token, navigate]);

  useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
    }
  }, [alertMessage]);

  return (
    <div>
      도장이 적립되었습니다
    </div>
  );
};

export default StampAdd;