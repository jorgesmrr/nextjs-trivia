import { ALLOWED_ERRORS_COUNT } from "../utils/consts";
import { RootState } from "./store";

export const getCurrentCategory = (state: RootState) => state.category.category;

export const getQuestions = (state: RootState) => state.category.questions;

export const getCurrentQuestion = (state: RootState) =>
    state.category.currentQuestionIndex !== null
        ? (state.category.questions || [])[state.category.currentQuestionIndex]
        : null;

export const getErrorsLeft = (state: RootState) =>
    ALLOWED_ERRORS_COUNT - state.category.errorsCount;

export const hasFinishedCategory = (state: RootState) =>
    state.category.questions &&
    (state.category.errorsCount === ALLOWED_ERRORS_COUNT ||
        state.category.answers.length === state.category.questions.length);
