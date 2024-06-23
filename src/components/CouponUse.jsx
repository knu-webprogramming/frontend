import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CouponUse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const shopId = queryParams.get('shopId');
  const token = useSelector((state) => state.token.token);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const applyCoupon = async () => {
      try {
        const response = await axios.post(`https://api.couponmoa.click/coupon/use/${shopId}`, {}, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setAlertMessage('쿠폰 사용을 완료하였습니다.');
          navigate(`/customer/coupon/${shopId}`, { replace: true });
        }
      } catch (error) {
        console.error('Error using coupon:', error);
        setAlertMessage('쿠폰 사용에 실패하였습니다.');
        navigate(`/customer/coupon/${shopId}`, { replace: true });
      }
    };

    if (shopId) {
      applyCoupon();
    }
  }, [shopId, token, navigate]);

  useEffect(() => {
    if (alertMessage) {
      alert(alertMessage);
    }
  }, [alertMessage]);

  return (
    <div>

    </div>
  );
};

export default CouponUse;