import { createSlice } from '@reduxjs/toolkit';
import https from "../util/http";
import axios from 'axios';

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    userDetails:{},
    token:"",
  },
  reducers: {
    setUserDetails:(state, action)=>{
      return {
        ...state,
        userDetails: {...action.payload},
      }
    },
    setToken:(state, action)=>{
      console.log(action.payload, ">>> action.payload");
      return {
        ...state,
        token: action.payload
      }
    }
  },
});

export const { setUserDetails, setToken } = authenticationSlice.actions;


export const fetchLogin = ()=> async (dispatch)=>{
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Set content type to JSON
    },
    body: JSON.stringify({
      "email":"alisha.shaikh@billing.com",
      "password": "alisha"
    }) // Convert JSON data to a string and set it as the request body
  };
  const response = await fetch(`${process.env.REACT_APP_APIAUTH_URL}/login`, options).then(async(res)=>await res.json());
dispatch(setToken(response.jwtToken));
dispatch(setUserDetails(response));
}

export const { userDetails, token } = ({ authentication })=> authentication;




export default authenticationSlice.reducer;
