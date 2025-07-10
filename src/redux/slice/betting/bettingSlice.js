import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
},
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
// export const selectData = state => state.data?.data; // Selector

export default dataSlice.reducer;
