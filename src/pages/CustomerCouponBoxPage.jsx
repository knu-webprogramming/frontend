import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import '../styles/CustomerCouponBoxPage.css';
import addImage from '../assets/add.png';
import backImage from '../assets/back.png';
import mapIconImage from '../assets/kakaomap.png';

function CustomerCouponBoxPage() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                <p className="no-coupons">쿠폰이 없습니다</p>
            </main>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <div className="modal-text">                         
                        등록할 가게를 선택하세요<br/>
                        </div>
                        <div className="modal-name">                         
                        인러브커피<br/>
                        </div>
                        <div className="modal-address">      
                        ㅁㅁㅁㅁ ㅇㅇ시 ㄱㄱ길 123<br/>
                        </div>
                        
                    </div>
                </div>
            )}
            <div className="floating-icon">
                <img src={mapIconImage} alt="Floating Icon" onClick={handleMapClick}/>
            </div>
        </div>
    );
};

export default CustomerCouponBoxPage;