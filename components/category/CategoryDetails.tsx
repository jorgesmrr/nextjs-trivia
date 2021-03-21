import Link from "next/link";
import Category from "../../models/category";

export type CategoryDetailsProps = {
    category: Category;
};

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category }) => {
    return (
        <div>
            <div>{category.name}</div>
            <div>
                <Link href={`/categories/${category.id}/questions`}>Start</Link>
            </div>
        </div>
    );
};

export default CategoryDetails;
