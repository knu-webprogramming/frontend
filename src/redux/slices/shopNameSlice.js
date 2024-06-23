import { createSlice } from '@reduxjs/toolkit';

const shopNameSlice = createSlice({
  name: 'shopName',
  initialState: '',
  reducers: {
    setShopName: (state, action) => action.payload,
    clearShopName: () => '',
  },
});

export const { setShopName, clearShopName } = shopNameSlice.actions;
export default shopNameSlice.reducer;