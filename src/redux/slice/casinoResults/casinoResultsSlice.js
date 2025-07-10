// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCasinoOldResults } from '../../../services/users';

// Async Thunks for API calls
export const getCasinoResults = createAsyncThunk('getSkyCasinoLast30Result', async (params, { rejectWithValue, dispatch }) => {
    try {
        const response = await getCasinoOldResults(params);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data.message || 'something went wrong';
        return rejectWithValue(error.response.data);
    }
});


const casinoResultsSlice = createSlice({
    name: 'casinoResults',
    initialState: {
        casinoResults: [],
    },
    reducers: {
        setCasinoResults(state, action) {
            state.casinoResults = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCasinoResults.pending, (state) => {
                state.casinoResults = [];
            })
            .addCase(getCasinoResults.fulfilled, (state, action) => {
                state.casinoResults = action.payload.resultData;
            })
            .addCase(getCasinoResults.rejected, (state, action) => {
                state.casinoResults = []
            })
    },
});

export const { setCasinoResults } = casinoResultsSlice.actions;


export default casinoResultsSlice.reducer;
