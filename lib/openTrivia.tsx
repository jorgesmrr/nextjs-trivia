import Category from "../models/category";

export const fetchCategories = async () => {
    const categoriesReponse = await fetch(
        "https://opentdb.com/api_category.php"
    );

    const categoriesData: {
        trivia_categories: Category[];
    } = await categoriesReponse.json();

    return categoriesData.trivia_categories;
};
