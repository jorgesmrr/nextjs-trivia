import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
    category: categoryReducer,
    user: userReducer,
});

export default rootReducer;
