import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    points: number;
}

const initialState: UserState = {
    name: null,
    points: 0,
};

const categoriesSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export default categoriesSlice.reducer;
