// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserNews } from '../../../services/users';

// Async Thunks for API calls
export const getNews = createAsyncThunk('news/getNews', async (params, { rejectWithValue, dispatch }) => {
    try {
        const response = await getUserNews(params);
        return response.data;
    } catch (error) {
        const errorMessage = error.response.data.message || 'user news fetch failed';
        return rejectWithValue(error.response.data);
    }
});


const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: {},
    },
    reducers: {
        setNews(state, action) {
            state.news = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNews.pending, (state) => {
                state.news = {};
            })
            .addCase(getNews.fulfilled, (state, action) => {
                state.news = action.payload.resultData;
            })
            .addCase(getNews.rejected, (state, action) => {
                state.news = {}
            })
    },
});

export const { setNews } = newsSlice.actions;


export default newsSlice.reducer;
