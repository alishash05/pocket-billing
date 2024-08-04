import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import authenticationSlice from '../service/loginSlice';

export default configureStore({
  reducer: combineReducers({
    authentication: authenticationSlice,
  }),
});
