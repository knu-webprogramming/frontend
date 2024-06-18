import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapModal from './MapModal';
import '../styles/KakaoMap.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const KakaoMap = () => {
  const token = useSelector((state) => state.token.token);
  const navigate = useNavigate();
  const [map, setMap] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNoResultsModalOpen, setIsNoResultsModalOpen] = useState(false);
  const [placeInfo, setPlaceInfo] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=5f2b49ecf8c38638572074c3a6841549&libraries=services&autoload=false`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const mapInstance = new window.kakao.maps.Map(container, options);
        setMap(mapInstance);
      });
    };
    document.head.appendChild(script);

    const fetchPlaces = async () => {
      try {
        const response = await axios.get('https://api.couponmoa.click/shop/all', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setPlaces(response.data);
      } catch (error) {
        console.error('Error fetching places data:', error);
      }
    };

    fetchPlaces();
  }, [token]);

  const handleSearch = () => {
    if (map && keyword) {
      const bounds = new window.kakao.maps.LatLngBounds();
      const filteredPlaces = places.filter((place) => place.place_name.includes(keyword));

      if (filteredPlaces.length === 0) {
        setIsNoResultsModalOpen(true);
        return;
      }

      filteredPlaces.forEach((place) => {
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(place.y, place.x),
        });

        window.kakao.maps.event.addListener(marker, 'click', () => {
          setSelectedPlace(place.place_name);
          setPlaceInfo({
            name: place.place_name,
            address: place.address_name,
            phone: place.phone,
            lat: place.y,
            lng: place.x,
            shop_id: place.shop_id // shop_id 추가
          });
          setIsModalOpen(true);
        });

        bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
      });
      map.setBounds(bounds);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = async () => {
    if (placeInfo && placeInfo.shop_id) {
      try {
        const response = await axios.post(`http://3.39.232.19:8080/coupon/${placeInfo.shop_id}`, {}, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.status === 200) {
          console.log('Coupon added successfully');
          setIsModalOpen(false);
          navigate('/customer/coupon-box');
        }
      } catch (error) {
        console.error('Error adding coupon:', error);
      }
    }
  };

  const handleCloseNoResultsModal = () => {
    setIsNoResultsModalOpen(false);
  };

  return (
    <div>
      <div style={{ padding: '10px' }}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="추가하고 싶은 매장을 검색하세요"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button onClick={handleSearch} className="search-button" style={{ width: '100%', padding: '8px' }}>검색</button>
      </div>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
      <MapModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        placeName={selectedPlace}
        address={placeInfo ? placeInfo.address : ''}
        onConfirm={handleConfirmModal}
      />
      {isNoResultsModalOpen && (
        <div className="modal-overlay" onClick={handleCloseNoResultsModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseNoResultsModal}>&times;</span>
            <p>검색 결과가 존재하지 않습니다.</p>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
          position: relative;
        }
        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          cursor: pointer;
        }
        .modal-buttons {
          display: flex;
          justify-content: space-between;
          gap: 20px; /* 버튼 사이의 간격을 조정하기 위한 갭 */
          margin-top: 20px; /* 버튼 사이의 간격을 조정하기 위한 마진 */
        }
        button.confirm {
          background-color: #ff637f; /* Confirm 버튼 배경색 설정 */
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }
        button.confirm:hover {
          background-color: #ff4a66;
        }
        button.cancel {
          background-color: #cccccc; /* Cancel 버튼 배경색 설정 */
          color: black;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }
        button.cancel:hover {
          background-color: #b3b3b3;
        }
      `}</style>
    </div>
  );
};

export default KakaoMap;