import { createSlice } from '@reduxjs/toolkit';
import https from "../util/http";

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    userDetails:{},
    token:""
  },
  reducers: {
    setUserDetails:(state, action)=>{
      return {
        ...state,
        userDetails: action.payload,
      }
    },
    setToken:(state, action)=>{
      return {
        ...state,
        token: action.payload
      }
    }
  },
});

export const { setUserDetails, setToken } = authenticationSlice.actions;


export const fetchLogin = ()=>(dispatch)=>{
  https(`${"'http://localhost:8080/auth/login"}`,{
    method:'POST',
    data:{
      email: "alisha.shaikh@billing.com",
      password:"alisha"
    }
  }).then((res)=>{
    dispatch(setToken(res.jwtToken));
    dispatch(setUserDetails(res));
  }).catch((error)=>{
    console.log(error);
  });
}

export const { userDetails, token } = ({ authentication })=> authentication;




export default authenticationSlice.reducer;
