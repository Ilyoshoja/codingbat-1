import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoggedInIterface } from "../types/interface";
import { RootState } from "./store";
 const initialState = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth") || "{}") : {value: false, token:""}
const isloggedInSlice = createSlice({
  name: "languageID",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<LoggedInIterface>) => {
      state.value = action.payload.value;
      state.token = action.payload.token;
      localStorage.setItem('auth', JSON.stringify(state));
    },
  },
});

export default isloggedInSlice.reducer;
export const { setValue } = isloggedInSlice.actions;
export const isloged = (state: RootState) => state.islogged;
