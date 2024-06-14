import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../styles/CustomerCouponBoxPage.css';
import addImage from '../assets/add.png';
import backImage from '../assets/back.png';
import mapIconImage from '../assets/kakaomap.png';
import CouponItem from '../components/CouponItem';

function CustomerCouponBoxPage() {
    const navigate = useNavigate();
    const token = useSelector((state) => state.token.token);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [shops, setShops] = useState([]);
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await axios.get('http://3.39.232.19:8080/shop/all', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(response.data); // 받아온 데이터 출력
                setShops(response.data);
            } catch (error) {
                console.error('Error fetching shop data:', error);
            }
        };

        if (isModalOpen) {
            fetchShops();
        }
    }, [isModalOpen, token]);

    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const response = await axios.get('http://3.39.232.19:8080/customer/shops', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(response.data); // 받아온 데이터 출력
                const updatedCoupons = response.data.map(coupon => ({
                    ...coupon,
                    profileImageUrl: `http://${coupon.profile_image_url}`
                }));
                setCoupons(updatedCoupons);
            } catch (error) {
                console.error('Error fetching coupon data:', error);
            }
        };

        fetchCoupons();
    }, [token]);

    const handleRedirect = () => {
        navigate('/');
    };

    const handleCustomerMainClick = () => {
        navigate('/customer/main');
    };

    const handleMapClick = () => {
        navigate('/customer/map');
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleShopClick = async (shopId) => {
        try {
            const response = await axios.post(`http://3.39.232.19:8080/coupon/${shopId}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                console.log('Coupon added successfully');
                toggleModal();
                // 필요한 경우 추가적인 동작 수행
            }
        } catch (error) {
            console.error('Error adding coupon:', error);
        }
    };

    return (
        <div className="couponbox-container">
            <header className="header">
                <div className="back-icon" onClick={handleCustomerMainClick}>
                    <img src={backImage} alt="Back Icon" />
                </div>
                <h1 className="title" onClick={handleRedirect}>쿠폰함</h1>
                <div className="add-icon" onClick={toggleModal}>
                    <img src={addImage} alt="Add Icon" />
                </div>
            </header>
            <main className="main-content">
                {coupons.length > 0 ? (
                    <div className="coupon-list">
                        {coupons.map((coupon, index) => (
                            <CouponItem 
                                key={index}
                                name={coupon.name}
                                profileImageUrl={coupon.profileImageUrl}
                                shopId={coupon.shop_id}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="no-coupons">쿠폰이 없습니다</p>
                )}
            </main>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <div className="modal-text">                         
                            등록할 가게를 선택하세요<br/>
                        </div>
                        {shops.map((shop, index) => (
                            <div key={index} className="shop-item" onClick={() => handleShopClick(shop.shop_id)}>
                                <div className="modal-name">{shop.name}<br/></div>
                                <div className="modal-address">{shop.address_name}<br/></div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="floating-icon">
                <img src={mapIconImage} alt="Floating Icon" onClick={handleMapClick}/>
            </div>
        </div>
    );
}

export default CustomerCouponBoxPage;