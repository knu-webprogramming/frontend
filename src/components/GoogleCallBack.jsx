import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/slices/tokenSlice';

const GoogleCallBack = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const extractTokenAndRedirect = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');
        if (token) {
          console.log('Token:', token);
          dispatch(setToken(token)); // 토큰을 Redux 상태에 저장
          navigate('/login/select');
        } else {
          console.log('Token not found in the URL');
        }
      } catch (error) {
        console.error('Error extracting token:', error);
      }
    };

    extractTokenAndRedirect();
  }, [location, navigate, dispatch]);

  return (
    <div>
      <h1>Google Callback</h1>
      <p>Token is being processed. Check the console for details.</p>
    </div>
  );
};

export default GoogleCallBack;