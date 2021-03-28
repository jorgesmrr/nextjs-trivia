import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchQuestions } from "../../lib/openTrivia";
import Category from "../../models/category";
import Question from "../../models/question";

interface QuestionsState {
    category: Category;
    questions: Question[];
    currentQuestionIndex?: number;
    answers: string[];
}

const initialState: QuestionsState = {
    category: null,
    questions: null,
    currentQuestionIndex: null,
    answers: null,
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
        },
        goToNextQuestion(state) {
            state.currentQuestionIndex++;
        },
        saveAnswer(state, action: PayloadAction<string>) {
            state.answers.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setCurrentCategory.fulfilled, (state, action) => {
            state.category = action.payload.category;
            state.questions = action.payload.questions;
            state.currentQuestionIndex = 0;
            state.answers = [];
        });
    },
});

export default categorySlice.reducer;

export const { goToNextQuestion, saveAnswer, reset } = categorySlice.actions;
