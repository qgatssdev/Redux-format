import { createSlice } from '@reduxjs/toolkit';

const initialValue = '';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: initialValue,
  },
  reducers: {
    themeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { themeColor } = themeSlice.actions;

export default themeSlice.reducer;
