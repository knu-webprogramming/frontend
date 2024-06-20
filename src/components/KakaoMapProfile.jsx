import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/KakaoMapProfile.css';

const KakaoMapProfile = ({ onPlaceSelect }) => {
  const [map, setMap] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNoResultsModalOpen, setIsNoResultsModalOpen] = useState(false);
  const [placeInfo, setPlaceInfo] = useState(null);

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
  }, []);

  const handleSearch = () => {
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        data.forEach((place) => {
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
            });
            setIsModalOpen(true);
          });

          bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
        });
        map.setBounds(bounds);
      } else {
        setIsNoResultsModalOpen(true);
      }
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
    if (typeof onPlaceSelect === 'function') {
      onPlaceSelect(placeInfo);
    } else {
      console.error('onPlaceSelect is not a function');
    }
    setIsModalOpen(false);
  };

  const handleCloseNoResultsModal = () => {
    setIsNoResultsModalOpen(false);
  };

  return (
    <div className="kakao-map-profile">
      <div style={{ padding: '10px' }}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="매장 이름을 검색하세요"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button onClick={handleSearch} className="search-button" style={{ width: '100%', padding: '8px' }}>검색</button>
      </div>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>선택한 장소: {selectedPlace}</p>
            <p>주소: {placeInfo ? placeInfo.address : ''}</p>
            <div className="modal-buttons">
              <button className="confirm" onClick={handleConfirmModal}>확인</button>
              <button className="cancel" onClick={handleCloseModal}>취소</button>
            </div>
          </div>
        </div>
      )}
      {isNoResultsModalOpen && (
        <div className="modal-overlay" onClick={handleCloseNoResultsModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseNoResultsModal}>&times;</span>
            <p>검색 결과가 존재하지 않습니다.</p>
          </div>
        </div>
      )}
    </div>
  );
};

KakaoMapProfile.propTypes = {
  onPlaceSelect: PropTypes.func.isRequired,
};

export default KakaoMapProfile;
