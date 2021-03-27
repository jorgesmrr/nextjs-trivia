import Link from "next/link";
import Category from "../../models/category";
import LayoutHeader from "../layout/LayoutHeader";
import CenteredImage from "../ui/CenteredImage";

export type CategoryDetailsProps = {
    category: Category;
};

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category }) => {
    return (
        <div className="text-center">
            <LayoutHeader title={category.name} />
            <CenteredImage file="thinking.svg" />
            <Link href={`/categories/${category.id}/questions`}>
                <a className="btn">Click to start!</a>
            </Link>
            <Link href={`/categories/${category.id}/ranking`}>
                <a className="block mt-6">See Ranking</a>
            </Link>
        </div>
    );
};

export default CategoryDetails;
