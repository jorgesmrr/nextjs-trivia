import React, { useState } from "react";
import Category from "../../models/category";
import LayoutHeader from "../layout/LayoutHeader";
import CategoryListItem from "./CategoryListItem";
import CenteredImage from "../ui/CenteredImage";
import TextField from "@bit/jorgemoreira.headless-react.input.text-field";

export interface CategoriesListProps {
    categories: Category[];
}

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
    const [filterText, setFilterText] = useState("");
    const filteredCategories = filterText.length
        ? categories.filter(
              (category) =>
                  category.name
                      .toLowerCase()
                      .indexOf(filterText.toLowerCase()) >= 0
          )
        : categories;

    return (
        <div>
            <LayoutHeader title="Trivia" hideOnMobile={true} />

            <div className="mx-auto svg-question" style={{ maxWidth: 500 }} />
            <CenteredImage file="question.svg" />
            <p className="mb-6 text-center">
                Select a category below to start answering questions
            </p>

            <div className="w-full mx-auto mb-12 md:w-1/2">
                <TextField
                    type="text"
                    autoFocus
                    value={filterText}
                    placeholder="Search..."
                    onChange={setFilterText}
                />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {filteredCategories.map((category) => (
                    <CategoryListItem key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoriesList;
