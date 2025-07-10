// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEvents } from '../../../services/users';

// Async Thunks for API calls
export const getAllEvents = createAsyncThunk('get-dashboard-data-with-user-id', async (params, { rejectWithValue, dispatch }) => {
    try {
        const response = await getEvents(params);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data.message || 'something went wrong';
        return rejectWithValue(error.response.data);
    }
});


const eventSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
    },
    reducers: {
        setEvents(state, action) {
            state.events = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllEvents.pending, (state) => {
                state.events = [];
            })
            .addCase(getAllEvents.fulfilled, (state, action) => {
                state.events = action.payload.resultData;
            })
            .addCase(getAllEvents.rejected, (state, action) => {
                state.events = []
            })
    },
});

export const { setEvents } = eventSlice.actions;


export default eventSlice.reducer;
