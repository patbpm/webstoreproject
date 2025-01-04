import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    user:null,
    isLoggedIn: false,
    error:null
 };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
    },

    logout: (state) => {
        state.user = null;
        state.isLoggedIn = false;
        state.error = null;
    },
    setError: (state, action)=> {
        state.error = action.payload
    }
  },
})

export const { login, logout, setError} = authSliceSlice.actions
export default authSlice.reducer