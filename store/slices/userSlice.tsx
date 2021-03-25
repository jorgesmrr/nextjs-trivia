import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
    username: string;
    score: number;
}

const initialState: UserState = {
    username: null,
    score: 0,
};

export const calculateScore = createAsyncThunk(
    "user/calculateScore",
    async (_, thunkAPI) => {
        const {
            questions,
            answers,
        } = (thunkAPI.getState() as RootState).category;

        const correctAnswersCount = questions
            .slice(0, answers.length)
            .filter(
                (question, index) => question.correct_answer === answers[index]
            ).length;

        thunkAPI.dispatch(setScore(correctAnswersCount * 100));
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setScore(state, action: PayloadAction<number>) {
            state.score = action.payload;
        },
    },
});

export default userSlice.reducer;

const { setScore } = userSlice.actions;
