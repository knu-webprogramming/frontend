import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CustomerCouponBoxPage.css';
import sampleImage from '../assets/sample.png';

function CustomerCouponBoxPage() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    };

    return (
        <div className="coupon-container">
            <header className="header">
                <div className="profile-icon" onClick={handleRedirect}>
                    <img src={sampleImage} alt="Profile Icon" />
                </div>
                <h1 className="title" onClick={handleRedirect}>쿠폰함</h1>
                <div className="add-icon" onClick={handleRedirect}>
                    <img src={sampleImage} alt="Add Icon" />
                </div>
            </header>
            <main className="main-content">
                <p className="no-coupons">쿠폰이 없습니다</p>
            </main>
        </div>
    );
};

export default CustomerCouponBoxPage;