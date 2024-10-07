import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefresing: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isError = false;
        return initialState;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefresing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefresing = false;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(register.pending, logIn.pending, logOut.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
        (state) => {
          state.isError = true;
          state.isLoading = false;
        }
      );
  },
});

export default authSlice.reducer;
