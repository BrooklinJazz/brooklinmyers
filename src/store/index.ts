import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { gitSlice } from "./slices/git";

const rootReducer = combineReducers({ git: gitSlice.reducer });
export type AppState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
