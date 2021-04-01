import React from "react";
import Category from "../../models/category";
import LayoutHeader from "../layout/LayoutHeader";
import CategoryListItem from "./CategoryListItem";
import CenteredImage from "../ui/CenteredImage";

export interface CategoriesListProps {
    categories: Category[];
};

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
    return (
        <div>
            <LayoutHeader title="Trivia" hideOnMobile={true} />
            <div className="svg-question mx-auto" style={{ maxWidth: 500 }} />
            <CenteredImage file="question.svg" />
            <p className="mb-12 text-center">
                Select a category below to start answering questions
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <CategoryListItem key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoriesList;
