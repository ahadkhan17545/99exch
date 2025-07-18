// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserOnlyById } from '../../../services/users';
import { setUserInfo } from '../../../redux/slice/userInfo/userInfoSlice';


// Async Thunks for API calls
export const getLoginUser = createAsyncThunk('users/getUserOnlyById', async (params, { rejectWithValue, dispatch }) => {
    try {
        const response = await getUserOnlyById(params);
        // console.log('response.data.resultData', response.data.resultData);
        dispatch(setUserInfo({
            is_password_update: response.data.resultData?.is_password_update,
            exposer_limit: response.data.resultData?.exposer_limit,
            is_casino_bet_lock: response.data.resultData?.is_casino_bet_lock ? response.data.resultData?.is_casino_bet_lock : null
        }));
       
        return response.data;
    } catch (error) {
        // const errorMessage = error.response.data.message || 'user balance fetch failed';
        return rejectWithValue(error.response.data);
    }
});


const userDataSlice = createSlice({
    name: 'loginuser',
    initialState: {
        loginuser: [],
    },
    reducers: {
        setLoingUserData(state, action) {
            state.loginuser = action.payload;
        },
        emptyLoingUserData(state) {
            state.loginuser = null;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getLoginUser.pending, (state) => {
    //             state.loginuser = [];

    //         })
    //         .addCase(getLoginUser.fulfilled, (state, action) => {
    //             state.loginuser = action.payload.resultData;
    //         })
    //         .addCase(getLoginUser.rejected, (state, action) => {
    //             state.loginuser = []

    //         })
    // },
});

export const { setLoingUserData,emptyLoingUserData } = userDataSlice.actions;


export default userDataSlice.reducer;
