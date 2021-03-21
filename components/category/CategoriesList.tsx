import React from "react";
import Link from "next/link";
import Category from "../../models/category";

export type CategoriesListProps = {
    categories: Category[];
};

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
    return (
        <div>
            {categories.map((c) => (
                <div key={c.id}>
                    <Link href={`/categories/${c.id}`}>{c.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default CategoriesList;
