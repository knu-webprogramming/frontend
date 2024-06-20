import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const StampAdd = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const shopId = queryParams.get('shopId');
  const token = useSelector((state) => state.token.token);

  useEffect(() => {
    const addStamp = async () => {
      try {
        const response = await axios.get(`https://api.couponmoa.click/coupon/stamp/${shopId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          alert('도장이 적립되었습니다');
          navigate(`/customer/coupon/${shopId}`);
        }
      } catch (error) {
        console.error('Error adding stamp:', error);
        alert('도장 적립에 실패했습니다.');
      }
    };

    if (shopId) {
      addStamp();
    }
  }, [shopId, token, navigate]);

  return (
    <div>
      도장이 적립되었습니다
    </div>
  );
};

export default StampAdd;