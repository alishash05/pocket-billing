import { createSlice } from '@reduxjs/toolkit';
import https from "../util/http";

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    userDetails:{},
    token:"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGlzaGEuc2hhaWtoQGJpbGxpbmcuY29tIiwiaWF0IjoxNzIxOTgwNTg2LCJleHAiOjE3MjE5OTg1ODZ9.QvHwEJI10b1IhJGxCfK7cZk2QtKcKQfrITqhSLgNDebZdqyWDsOvVYnHfq3I8q389rdr3r3z71JEX0tJmXLPFA",
    suggetions:[
    {
        "fullname":"Hidayat, Shaikh",
        "name": "Hidayat",
        "lastname": "Shaikh",
        "phone": "9988199919",
        "address": "128/5B, Dattawadi, Pune-30",
        "email":"hidayat.shaikh@billing.com",
        "img":"",
        "id":1,
        "serviceId":"110051987"
    },
    {
        "fullname":"Alisha, Shaikh",
        "name": "Alisha",
        "lastname": "Shaikh",
        "phone": "56568958989",
        "address": "102, nearby masjid, bhim nagar, Pune-11",
        "email":"alisha.shaikh@billing.com",
        "img":"",
        "id":2,
        "serviceId":"11265656"
    }
],
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
