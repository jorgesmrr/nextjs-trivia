import { RootState } from "./store";

export const getCurrentCategory = () => (state: RootState) =>
    state.category.category;

export const areQuestionsReady = () => (state: RootState) =>
    (state.category.questions || []).length;

export const getQuestions = () => (state: RootState) =>
    state.category.questions;

export const getAnswers = () => (state: RootState) => state.category.answers;
