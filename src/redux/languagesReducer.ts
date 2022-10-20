import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguagesInterFace } from "../types/interface";
import { RootState } from "./store";

const initialState: { arr: LanguagesInterFace[]} = {
  arr:localStorage.getItem("langs")? JSON.parse(localStorage.getItem('langs')|| "[]"): [],
};
const languageIdSlice = createSlice({
  name: "languageID",
  initialState,
  reducers: {
    setLanguages: (state, action: PayloadAction<LanguagesInterFace[]>) => {
      state.arr = action.payload;
      localStorage.setItem("langs", JSON.stringify(state.arr))
    },
  },
});

export default languageIdSlice.reducer;
export const { setLanguages } = languageIdSlice.actions;
export const languages = (state: RootState) => state.languages;
