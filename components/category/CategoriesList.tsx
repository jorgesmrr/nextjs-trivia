import React from "react";
import { Category } from "../../models/category";

export type CategoriesListProps = { categories: Category[] };

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
    return (
        <div>
            {categories.map((c) => (
                <div>{c.title}</div>
            ))}
        </div>
    );
};

export default CategoriesList;
