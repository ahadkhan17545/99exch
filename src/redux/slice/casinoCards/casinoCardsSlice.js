// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCasinoOldCards } from '../../../services/users';

// Async Thunks for API calls
export const getCasinoCards = createAsyncThunk('getSkyCasinoLast10Cards', async (params, { rejectWithValue, dispatch }) => {
    try {
        const response = await getCasinoOldCards(params);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data.message || 'something went wrong';
        return rejectWithValue(error.response.data);
    }
});


const casinoCardsSlice = createSlice({
    name: 'casinoCards',
    initialState: {
        casinoCards: [],
    },
    reducers: {
        setCasinoCards(state, action) {
            state.casinoCards = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCasinoCards.pending, (state) => {
                state.casinoCards = [];
            })
            .addCase(getCasinoCards.fulfilled, (state, action) => {
                state.casinoCards = action.payload.resultData;
            })
            .addCase(getCasinoCards.rejected, (state, action) => {
                state.casinoCards = []
            })
    },
});

export const { setCasinoCards } = casinoCardsSlice.actions;


export default casinoCardsSlice.reducer;
