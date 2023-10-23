import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
    auth: "isLoading",

    user: {},
    error: ""
}

const fetchUser = createAsyncThunk("user/fetchUser", async () => {
        const res = await axios("/api/user")
        const data = res.data.data
        return data
})




const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.auth = "isLoading"
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.auth = "authorazation";
            state.user = action.payload;
            state.error = ""
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            
            state.auth = "unauthorazation";
            state.user = {};
            state.error = "ابتدا در سایت ورود کنید"
        })
    }
})


export default userSlice.reducer
export { fetchUser }