import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import productSlice from './productSlice';
const reducer = combineReducers({
  products: productSlice,
});
const store = configureStore({
  reducer,
});
export default store;
