import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    points: 0,
};

const categoriesSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export default categoriesSlice.reducer;
