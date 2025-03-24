import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    userProfile: null
}

export const userProfileSlice = createSlice({
    name:"userProfile",
    initialState,
    reducers: {
        userProfile: (state,action)=>{
            const { email, name, profilePicture,dob,bio } = action.payload;
            console.log("action.payload",action.payload)
      
            state.user = { email, name, profilePicture,dob,bio }; 
        }
    }
})

export const {userProfile} = userProfileSlice.actions;
export default userProfileSlice.reducer;