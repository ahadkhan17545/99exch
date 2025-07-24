// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auraEventTypesWisePLNew } from '../../../services/users';

// Async Thunks for API calls
export const getAuraEventTypesWisePLNew = createAsyncThunk('auraEventTypesWisePLNew', async (params, { rejectWithValue, dispatch }) => {
    try {
        console.log('params',params);
        const response = await auraEventTypesWisePLNew(params);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data.message || 'something went wrong';
        return rejectWithValue(error.response.data);
    }
});


const eventReportSlice = createSlice({
    name: 'eventReports',
    initialState: {
        eventReports: [],
    },
    reducers: {
        setEventReports(state, action) {
            state.eventReports = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAuraEventTypesWisePLNew.pending, (state) => {
                state.eventReports = [];
            })
            .addCase(getAuraEventTypesWisePLNew.fulfilled, (state, action) => {
                state.eventReports = action.payload.resultData;
            })
            .addCase(getAuraEventTypesWisePLNew.rejected, (state, action) => {
                state.eventReports = []
            })
    },
});

export const { setEventReports } = eventReportSlice.actions;


export default eventReportSlice.reducer;
