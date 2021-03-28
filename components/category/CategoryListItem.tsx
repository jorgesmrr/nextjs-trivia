import Link from "next/link";
import Category from "../../models/category";

export type CategoryListItemProps = {
    category: Category;
};

const CategoryListItem = ({ category }) => {
    return (
        <Link href={`/categories/${category.id}`} key={category.id}>
            <a key={category.id} className="btn text-left">
                {category.name}
            </a>
        </Link>
    );
};

export default CategoryListItem;
