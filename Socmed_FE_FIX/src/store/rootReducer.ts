import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { threadSlice } from "./slices/threadSlice";
import { userSlice } from "./slices/userSlice";

export const { AUTH_LOGIN, AUTH_CHECK, AUTH_LOGOUT, AUTH_ERROR } =
  authSlice.actions;
export const { GET_THREADS, SET_THREAD_LIKE } = threadSlice.actions;
export const { GET_USERS } = userSlice.actions;

export const authReducer = authSlice.reducer;
export const threadReducer = threadSlice.reducer;
export const userReducer = userSlice.reducer;

const rootReducer = combineReducers({
  auth: authReducer,
  thread: threadReducer,
  user: userReducer,
});

export default rootReducer;
