// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOpenBets } from "../../../services/users";

// Async Thunks for API calls
export const getAllBets = createAsyncThunk(
  "reports/allOpenBets",
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const response = await getOpenBets(params);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response.data.message || "user bets fetch failed";
      return rejectWithValue(error.response.data);
    }
  }
);

const openBetSlice = createSlice({
  name: "bets",
  initialState: {
    bets: [],
  },
  reducers: {
    setOpenBets(state, action) {
      state.bets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBets.pending, (state) => {
        state.bets = [];
      })
      .addCase(getAllBets.fulfilled, (state, action) => {
        // let exposureBets = action.payload.resultData;
        let eventData = action.payload.resultData;
        // let backBets = eventData.filter(data => data.is_back);
        // let layBets = eventData.filter(data => !data.is_back);
        // eventData = {
        //     'backBets': backBets,
        //     'layBets': layBets,
        //     'exposureBets': exposureBets
        // }

        state.bets = eventData;
      })
      .addCase(getAllBets.rejected, (state, action) => {
        state.bets = [];
      });
  },
});

export const { setOpenBets, emptyOpenBets } = openBetSlice.actions;

export default openBetSlice.reducer;
