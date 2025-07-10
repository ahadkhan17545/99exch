// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEventData } from '../../../services/users';

// Async Thunks for API calls
export const getMatchData = createAsyncThunk('eventsDashboard/getDashboardDataByeventId', async (params, { rejectWithValue, dispatch }) => {
    try {
        const response = await getEventData(params);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data.message || 'user event data fetch failed';
        return rejectWithValue(error.response.data);
    }
});


const eventDataSlice = createSlice({
    name: 'eventData',
    initialState: {
        eventData: {},
        loading: false
    },
    reducers: {
        setEventData(state, action) {
            state.eventData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMatchData.pending, (state, action) => {
                // state.eventData = {};
                // console.log('action.meta.arg.event_id', action.meta.arg);
                state.eventData = { ...state.eventData, [action.meta.arg.event_id]: state.eventData[action.meta.arg.event_id] || [] };
                state.loading = !state.eventData[action.meta.arg.event_id] ? true : false;
                // console.log('state.eventData', state.eventData);

            })
            .addCase(getMatchData.fulfilled, (state, action) => {
                // console.log('action', action);
                state.eventData = { ...state.eventData, [action.meta.arg.event_id]: action.payload.resultData };
                state.loading = false;

            })
            .addCase(getMatchData.rejected, (state, action) => {
                state.eventData = { ...state.eventData, [action.meta.arg.event_id]: state.eventData[action.meta.arg.event_id] || [] };
                state.loading = false
            })
    },
});

export const { setEventData } = eventDataSlice.actions;


export default eventDataSlice.reducer;
