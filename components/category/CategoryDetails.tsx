import Link from "next/link";
import Category from "../../models/category";
import LayoutHeader from "../layout/LayoutHeader";
import CenteredImage from "../centered-image/CenteredImage";

export interface CategoryDetailsProps {
    category: Category;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category }) => {
    return (
        <div className="text-center">
            <LayoutHeader
                title={category.name}
                backLink="/"
                backLinkLabel="Home"
            />
            <CenteredImage file="thinking.svg" />
            <Link href={`/categories/${category.id}/questions`}>
                <a className="btn">Click to start!</a>
            </Link>
            <div className="text-center">
                <Link href={`/categories/${category.id}/ranking`}>
                    <a className="inline-block mt-6">See Ranking</a>
                </Link>
            </div>
        </div>
    );
};

export default CategoryDetails;
