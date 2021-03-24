import Link from "next/link";
import Category from "../../models/category";

export type CategoryDetailsProps = {
    category: Category;
};

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category }) => {
    return (
        <div className="text-center">
            <div className="text-center mb-4">
                <p className="subtitle">The category is</p>
                <h1>{category.name}</h1>
                <p>Ready to start?</p>
            </div>
            <div>
                <Link href={`/categories/${category.id}/questions`}>
                    <a className="btn">Start</a>
                </Link>
            </div>
        </div>
    );
};

export default CategoryDetails;
