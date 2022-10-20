import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenInterFace } from "../types/interface";
import { RootState } from "./store";

 const initialState = localStorage.getItem('languageID')? JSON.parse(localStorage.getItem('languageID')||"{}") : {index: 0, id:1} 

const languageIdSlice = createSlice({
  name: "languageID",
  initialState,
  reducers: {
    setLanguageID: (state, action: PayloadAction<TokenInterFace>) => {
      state.index = action.payload.index;
      state.id = action.payload.id;
      localStorage.setItem("languageID", JSON.stringify(state))
    },

    changeLanguageID: (state, action: PayloadAction<TokenInterFace>) => {
       state.index = action.payload.index;
       state.id = action.payload.id;
       localStorage.setItem("languageID", JSON.stringify(state))
    },
  },
});

export default languageIdSlice.reducer;
export const { setLanguageID, changeLanguageID } = languageIdSlice.actions;
export const langId = (state: RootState) => state.langId;
