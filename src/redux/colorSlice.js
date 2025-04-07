import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentColor: '#ffffff',
  history: [],
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.currentColor = action.payload;
      if (!state.history.includes(action.payload)) {
        state.history.push(action.payload);
      }
    },
    removeColor: (state, action) => {
      state.history = state.history.filter(color => color !== action.payload);
    },
    selectFromHistory: (state, action) => {
      state.currentColor = action.payload;
    },
  },
});

export const { setColor, removeColor, selectFromHistory } = colorSlice.actions;
export default colorSlice.reducer;
