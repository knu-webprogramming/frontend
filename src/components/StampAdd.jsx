import React, { useEffect } from 'react';

const StampAdd = () => {
  useEffect(() => {
    alert("도장이 적립되었습니다");
  }, []);

  return (
    <div>
      도장이 적립되었습니다
    </div>
  );
};

export default StampAdd;