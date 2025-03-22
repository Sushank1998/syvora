import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, 
  user: null, 
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userData: (state, action) => {
      const { email, name, password, profilePicture } = action.payload;
      console.log("action.payload",action.payload)

      state.user = { email, name, password, profilePicture }; 
    console.log("sss",state)
    console.log("sss",state.user)
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;  
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout,userData } = authSlice.actions;
export default authSlice.reducer;
