import Category from "../models/category";
import Question from "../models/question";
import { QUESTIONS_COUNT } from "../utils/consts";

export const fetchCategories = async () => {
    const categoriesReponse = await fetch(
        "https://opentdb.com/api_category.php"
    );

    const categoriesData = await categoriesReponse.json();
    const sortedCategories = (categoriesData.trivia_categories as Category[]).sort(
        (a, b) => (a.name > b.name ? 1 : -1)
    );

    return sortedCategories;
};

export const fetchQuestions = async (categoryId: number) => {
    const questionsReponse = await fetch(
        `https://opentdb.com/api.php?amount=${QUESTIONS_COUNT}&category=${categoryId}&type=multiple`
    );

    const questionsData = await questionsReponse.json();

    return questionsData.results as Question[];
};
