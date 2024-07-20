import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    firstName: '',
    gender: '',
    id: '',
    image: '',
    lastName: '',
    token: '',
    username: '',
  },
  reducers: {
    Email: (state, action) => { state.email = action.payload; },
    FirstName: (state, action) => { state.firstName = action.payload; },
    Gender: (state, action) => { state.gender = action.payload; },
    Id: (state, action) => { state.id = action.payload; },
    Image: (state, action) => { state.image = action.payload; },
    LastName: (state, action) => { state.lastName = action.payload; },
    Token: (state, action) => { state.token = action.payload; },
    Username: (state, action) => { state.username = action.payload; },
    Password: (state, action) => { state.password = action.payload; },
  },
});

export const { Email, FirstName, Gender, Id, Image, LastName, Token, Username, Password } = loginSlice.actions;
export default loginSlice.reducer;
