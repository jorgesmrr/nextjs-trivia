import { combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
    feeds: categoriesReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
