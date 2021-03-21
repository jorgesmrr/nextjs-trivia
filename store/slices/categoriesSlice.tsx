import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
};

const categoriesSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {},
});

export default categoriesSlice.reducer;
