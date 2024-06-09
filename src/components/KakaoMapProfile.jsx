import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';  // prop-types 추가
import MapModalProfile from './MapModalProfile';
import '../styles/KakaoMapProfile.css';

const KakaoMapProfile = ({onPlaceSelect}) => {
  console.log('KakaoMapProfile rendered with onPlaceSelect:', onPlaceSelect);

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
        console.log('Map loaded:', mapInstance);
      });
    };
    document.head.appendChild(script);
  }, []);

  const handleSearch = () => {
    console.log('Search started with keyword:', keyword);
    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status) => {
      console.log('Search results:', data);
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        data.forEach((place) => {
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.y, place.x),
          });

          window.kakao.maps.event.addListener(marker, 'click', () => {
            console.log('Marker clicked:', place);
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
    console.log('Confirm modal with placeInfo:', placeInfo);
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
    <div>
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
      <MapModalProfile
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
    </div>
  );
};

KakaoMapProfile.propTypes = {
  onPlaceSelect: PropTypes.func.isRequired,
};

export default KakaoMapProfile;