// auth slice

import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {
  user: null | object;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user);
      console.log(token);
      console.log(state);
      console.log(localStorage);
      console.log(localStorage.getItem("token"));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
