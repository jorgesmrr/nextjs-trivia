import Link from "next/link";
import Category from "../../models/category";

export interface CategoryListItemProps {
    category: Category;
}

const CategoryListItem = ({ category }) => {
    return (
        <Link href={`/categories/${category.id}`} key={category.id}>
            <a
                key={category.id}
                className="btn text-left flex flex-col justify-center"
            >
                {category.name}
            </a>
        </Link>
    );
};

export default CategoryListItem;
