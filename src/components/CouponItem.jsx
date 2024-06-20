import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CouponItem.css';

const CouponItem = ({ name, profileImageUrl, shopId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/customer/coupon/${shopId}`);
  };

  return (
    <div className="coupon-item" onClick={handleClick}>
      <img src={profileImageUrl} alt={name} className="coupon-image" />
      <p className="coupon-name">{name}</p>
    </div>
  );
};

export default CouponItem;