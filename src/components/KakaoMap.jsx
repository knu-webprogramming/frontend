import React, { useEffect, useState } from 'react';
import MapModal from './MapModal';

const KakaoMap = () => {
  const [map, setMap] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            setIsModalOpen(true);
          });

          bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
        });
        map.setBounds(bounds);
      }
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
    // 쿠폰함에 추가하는 로직을 여기에 추가합니다.
    console.log(`${selectedPlace} 추가됨`);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div style={{ padding: '10px' }}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter a keyword"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button onClick={handleSearch} style={{ width: '100%', padding: '8px' }}>Search</button>
      </div>
      <div id="map" style={{ width: '100%', height: '500px' }}></div>
      <MapModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        placeName={selectedPlace}
        onConfirm={handleConfirmModal}
      />
    </div>
  );
};

export default KakaoMap;