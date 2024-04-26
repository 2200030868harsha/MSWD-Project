import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  currentUser: null, // Add currentUser field to store the signed-in admin
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    signInStart(state) {
      state.loading = true;
      state.error = null;
    },
    signInSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.currentUser = action.payload; // Set currentUser after successful sign-in
    },
    signInFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    signOut(state) {
      state.currentUser = null; // Clear currentUser when signing out
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, signOut } = adminSlice.actions;

export default adminSlice.reducer;
