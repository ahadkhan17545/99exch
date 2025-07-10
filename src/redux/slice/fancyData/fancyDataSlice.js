// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFancyData } from '../../../services/users';

// Async Thunks for API calls
export const getMatchFancyData = createAsyncThunk('eventsDashboard/getEventFancy', async (params, { rejectWithValue, dispatch }) => {
    try {
        const response = await getFancyData(params);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data.message || 'user event fancy data fetch failed';
        return rejectWithValue(error.response.data);
    }
});


const fancyDataSlice = createSlice({
    name: 'fancyData',
    initialState: {
        fancyData: {},
        loading: false
    },
    reducers: {
        setEventFancyData(state, action) {
            state.fancyData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMatchFancyData.pending, (state, action) => {
                state.fancyData = { ...state.fancyData, [action.meta.arg.event_id]: state.fancyData[action.meta.arg.event_id] || [] };
                state.loading = !state.fancyData[action.meta.arg.event_id] ? true : false;

            })
            .addCase(getMatchFancyData.fulfilled, (state, action) => {
                state.fancyData = { ...state.fancyData, [action.meta.arg.event_id]: action.payload.data };
                state.loading = false;

            })
            .addCase(getMatchFancyData.rejected, (state, action) => {
                state.fancyData = { ...state.fancyData, [action.meta.arg.event_id]: state.fancyData[action.meta.arg.event_id] || [] };
                state.loading = false
            })
    },
});

export const { setEventFancyData } = fancyDataSlice.actions;


export default fancyDataSlice.reducer;
