// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { userAuthenticate } from '../../../services/users';

// Async Thunks for API calls
// export const getUserInfo = createAsyncThunk('users/userAuthenticate', async (params, { rejectWithValue, dispatch }) => {
//     try {
//         const response = await userAuthenticate(params);
//         return response.data;
//     } catch (error) {
//         const errorMessage = error.response.data.message || 'Invalid Login Credential!';
//         return rejectWithValue(error.response.data);
//     }
// });


const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: {
        userdata: null,
    },
    reducers: {
        setUserInfo(state, action) {
            state.userdata = action.payload;
        },
        emptyUserInfo(state) {
            state.userdata = null;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getUserInfo.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(getUserInfo.fulfilled, (state, action) => {
    //             state.userdata = action.payload.resultData;
    //             state.login_token = action.payload.resultData.login_token;
    //         })
    //         .addCase(getUserInfo.rejected, (state, action) => {
    //             state.loading = false;
    //         })
    // },
});

export const { setUserInfo, emptyUserInfo } = userInfoSlice.actions;


export default userInfoSlice.reducer;
