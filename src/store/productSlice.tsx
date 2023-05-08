import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: null,
  reducers: {
    setItemList: (state, {payload}) => {
      state.item = payload;
      state.loading = false;
      state.hasErrors = false;
      state.hasMessage = null;
    },
  },
});

export const {setItemList} = productSlice.actions;
export default productSlice.reducer;
export const getProductsData = () => async dispatch => {};
