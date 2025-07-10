// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPaymentDetails } from '../../../services/users';

// Async Thunks for API calls
export const getPaymentMethods = createAsyncThunk('getPaymentDetails', async (params, { rejectWithValue, dispatch }) => {
    try {
        const response = await getPaymentDetails(params);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data.message || 'something went wrong';
        return rejectWithValue(error.response.data);
    }
});


const paymentMethodSlice = createSlice({
    name: 'paymentMethods',
    initialState: {
        paymentMethods: [],
    },
    reducers: {
        setPaymentMethods(state, action) {
            state.paymentMethods = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPaymentMethods.pending, (state) => {
                state.paymentMethods = [];
            })
            .addCase(getPaymentMethods.fulfilled, (state, action) => {
                state.paymentMethods = action.payload.resultData;
            })
            .addCase(getPaymentMethods.rejected, (state, action) => {
                state.paymentMethods = []
            })
    },
});

export const { setPaymentMethods } = paymentMethodSlice.actions;


export default paymentMethodSlice.reducer;
