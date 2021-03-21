import { RootState } from "./store";

export const getCategoryById = (id: number) => (state: RootState) =>
    (state.category.categories || []).find((c) => c.id === id);

export const areQuestionsReady = () => (state: RootState) =>
    (state.category.questions || []).length;
