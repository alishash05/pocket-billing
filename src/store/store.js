import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import login from '../service/loginSlice';

export default configureStore({
  reducer: combineReducers({
    login: login,
  }),
});
