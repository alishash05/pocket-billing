import { createSlice } from '@reduxjs/toolkit';
import https from "../util/http";

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    userDetails:{},
    token:"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGlzaGEuc2hhaWtoQGJpbGxpbmcuY29tIiwiaWF0IjoxNzIxOTI1NTQ4LCJleHAiOjE3MjE5NDM1NDh9.BDvG02USLPV24w8mh6dU9lB0Dbr6HHfV-olugK8txnRHzRr7FUHQFzcl_CkcsWn37T-p_X1g55LlWvgN5kwGVA",
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
