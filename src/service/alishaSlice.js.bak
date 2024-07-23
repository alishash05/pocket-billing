import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'validation', 
    initialState: {
        users:"",
        passwords:"",
	    },
    reducers: {
        Username: (state, action) => {
            state.users = action.payload;
        },
        Password: (state, action) => {
            state.passwords = action.payload;
        },
	
    },
});

export const { Username, Password } = slice.actions
export default slice.reducer

















