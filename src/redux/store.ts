import { configureStore } from "@reduxjs/toolkit";
import islogged from "./isloggedIn";
import langId from "./languageID";
import languages from "./languagesReducer";

export const store = configureStore({
  reducer: {
    langId,
    islogged,
    languages,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
