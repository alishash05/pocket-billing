import { combineReducers, configureStore } from '@reduxjs/toolkit';
import login from '../service/loginSlice';

export default configureStore({
  reducer: combineReducers({
    login: login,
  }),
});
