/*import { createSlice } from '@reduxjs/toolkit';
import https from "../util/http";

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    userDetails:{},
    token:"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGlzaGEuc2hhaWtoQGJpbGxpbmcuY29tIiwiaWF0IjoxNzIxOTgwNTg2LCJleHAiOjE3MjE5OTg1ODZ9.QvHwEJI10b1IhJGxCfK7cZk2QtKcKQfrITqhSLgNDebZdqyWDsOvVYnHfq3I8q389rdr3r3z71JEX0tJmXLPFA",
    suggetions:[],
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
    },
    setSuggetions:(state, action)=>{
      console.log(action.payload, ">>> action.payload");
      return {
        ...state,
        suggetions: action.payload
      }
    }
  },
});

export const { setUserDetails, setToken, setSuggetions } = authenticationSlice.actions;


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


export const fetchAutocomplete = (search)=>(dispatch)=>{
  https(`${process.env.REACT_APP_APIBASE_URL}/suggestions?prefix=${search}`,{
    method:"GET"
  }).then(({data})=>{
    dispatch(setSuggetions(data));
    console.log(data, "search result");
  })
}

export const { userDetails, token, suggetions } = ({ authentication })=> authentication;

export const getSuggetionsList = ({authentication})=> authentication.suggetions;


export default authenticationSlice.reducer;
*/

import { createSlice } from '@reduxjs/toolkit';
import https from "../util/http";
import axios from 'axios';

const initialState = {
  userDetails: {},
  token: "",
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setUserDetails, setToken,} = authenticationSlice.actions;

export const fetchLogin = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/auth/login', {
      email: "alisha.shaikh@billing.com",
      password: "alisha"
    });

  //const response = await fetch(`${process.env.REACT_APP_APIAUTH_URL}/login`, options).then(async(res)=>await res.json());
    
	dispatch(setToken(response.data.jwtToken));
    dispatch(setUserDetails(response.data));
  } catch (error) {
  
    console.error('Login failed:', error.message);
  }
};

export const selectAuthentication = (state) => state.authentication;

export default authenticationSlice.reducer;
