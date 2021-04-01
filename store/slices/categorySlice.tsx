import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchQuestions } from "../../lib/openTrivia";
import Category from "../../models/category";
import Question from "../../models/question";

interface QuestionsState {
    category: Category;
    questions: Question[];
    currentQuestionIndex?: number;
    answers: string[];
    errorsCount: number;
}

const initialState: QuestionsState = {
    category: null,
    questions: null,
    currentQuestionIndex: null,
    answers: null,
    errorsCount: null,
};

export const setCurrentCategory = createAsyncThunk(
    "category/setCurrentCategory",
    async (category: Category, thunkAPI) => {
        thunkAPI.dispatch(reset());
        return {
            category,
            questions: await fetchQuestions(category.id),
        };
    }
);

const categorySlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        reset(state) {
            state.category = null;
            state.questions = null;
            state.currentQuestionIndex = null;
            state.answers = null;
            state.errorsCount = null;
        },
        saveAnswer(state, action: PayloadAction<string>) {
            state.answers.push(action.payload);

            if (
                action.payload !==
                state.questions[state.currentQuestionIndex].correct_answer
            ) {
                state.errorsCount++;
            }

            state.currentQuestionIndex++;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setCurrentCategory.fulfilled, (state, action) => {
            state.category = action.payload.category;
            state.questions = action.payload.questions;
            state.currentQuestionIndex = 0;
            state.answers = [];
            state.errorsCount = 0;
        });
    },
});

export default categorySlice.reducer;

export const { saveAnswer, reset } = categorySlice.actions;
