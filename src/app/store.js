import { configureStore } from "@reduxjs/toolkit";
import addPostReducer from "../features/addpostSlice";
import authReducer from "../features/authSlice";
import followingReducer from "../features/followingSlice"

export const store = configureStore({
    reducer: {
        photo: addPostReducer,
        auth: authReducer, 
        searchName: followingReducer,
    }
})