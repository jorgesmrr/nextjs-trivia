import Link from "next/link";
import Category from "../../models/category";
import LayoutHeader from "../layout/LayoutHeader";

export type CategoryDetailsProps = {
    category: Category;
};

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category }) => {
    return (
        <div className="text-center">
            <LayoutHeader
                title={category.name}
                upperSubtitle="The category is"
                description="Ready to start?"
            />
            <div>
                <Link href={`/categories/${category.id}/questions`}>
                    <a className="btn">Start</a>
                </Link>
                <Link href={`/categories/${category.id}/ranking`}>
                    <a className="btn">See Ranking</a>
                </Link>
            </div>
        </div>
    );
};

export default CategoryDetails;
