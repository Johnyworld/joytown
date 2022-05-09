import { createSlice } from '@reduxjs/toolkit';

const user = localStorage.getItem('userInfo');
const userInfo = user ? JSON.parse(user) : null;

const initialState = {
  userInfo,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logOut: (state, action) => {
      localStorage.removeItem('userInfo');
      state.userInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logOut } = counterSlice.actions;

export default counterSlice.reducer;
