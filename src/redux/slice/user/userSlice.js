// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserBalance } from '../../../services/users';

// Async Thunks for API calls
export const getUserBal = createAsyncThunk('ledger/getUserBalance', async (params, { rejectWithValue, dispatch }) => {
    try {
        const response = await getUserBalance(params);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data.message || 'user balance fetch failed';
        return rejectWithValue(error.response.data);
    }
});


const userSlice = createSlice({
    name: 'userbal',
    initialState: {
        userBalance: {},
        loading:false
    },
    reducers: {
        setBalance(state, action) {
            state.userBalance = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserBal.pending, (state) => {
                state.userBalance = {};
                state.loading = true

            })
            .addCase(getUserBal.fulfilled, (state, action) => {
                state.userBalance = action.payload.resultData;
                state.loading = false

            })
            .addCase(getUserBal.rejected, (state, action) => {
                state.userBalance = {}
                state.loading = false

            })
    },
});

export const { setBalance } = userSlice.actions;


export default userSlice.reducer;
