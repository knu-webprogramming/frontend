import React from 'react';
import '../styles/CouponItem.css';

const CouponItem = ({ name, profileImageUrl }) => {
  return (
    <div className="coupon-item">
      <img src={profileImageUrl} alt={name} className="coupon-image" />
      <p className="coupon-name">{name}</p>
    </div>
  );
};

export default CouponItem;