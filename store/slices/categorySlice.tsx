import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Category from "../../models/category";
import Question from "../../models/question";

interface QuestionsState {
    categories: Category[];
    currentCategory: Category;
    questions: Question[];
    currentQuestionIndex?: number;
}

const initialState: QuestionsState = {
    categories: null,
    currentCategory: null,
    questions: null,
    currentQuestionIndex: null,
};

export const setCurrentCategory = createAsyncThunk(
    "categories/setCurrentCategory",
    async (categoryId: number, thunkAPI) => {
        const questionsReponse = await fetch(
            `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=easy&type=multiple`
        );

        const questionsData: {
            results: Question[];
        } = await questionsReponse.json();

        return {
            categoryId,
            questions: questionsData.results,
        };
    }
);

const categorySlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<Category[]>) {
            state.categories = action.payload;
        },
        goToNextQuestion(state) {
            state.currentQuestionIndex++;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setCurrentCategory.fulfilled, (state, action) => {
            state.currentCategory = (state.categories || []).find(
                (c) => c.id === action.payload.categoryId
            );
            state.questions = action.payload.questions;
            state.currentQuestionIndex = 0;
        });
    },
});

export default categorySlice.reducer;

export const { goToNextQuestion, setCategories } = categorySlice.actions;
