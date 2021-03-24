import React from "react";
import Link from "next/link";
import Category from "../../models/category";

export type CategoriesListProps = {
    categories: Category[];
};

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
    return (
        <div>
            <div className="text-center mb-4">
                <h1 className="font-bold text-2xl mb-3">Trivia</h1>
                <p>Select a category below to start answering questions :)</p>
            </div>
            {categories.map((category) => (
                <Link href={`/categories/${category.id}`} key={category.id}>
                    <a key={category.id} className="block btn">
                        {category.name}
                    </a>
                </Link>
            ))}
        </div>
    );
};

export default CategoriesList;
