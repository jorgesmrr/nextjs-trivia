import Link from "next/link";
import React from "react";
import Category from "../../models/category";
import LayoutHeader from "../layout/LayoutHeader";
import RankingFormConnect from "../ranking/RankingFormConnect";

export type CategoryReviewProps = {
    category: Category;
    score: number;
};

const CategoryReview: React.FC<CategoryReviewProps> = ({ category, score }) => {
    return (
        <div className="text-center">
            <LayoutHeader
                upperSubtitle="Game Over"
                title={
                    <span>
                        Score:{" "}
                        <span className="text-primary font-semibold">
                            {score}
                        </span>
                    </span>
                }
            />
            <RankingFormConnect />
            <div className="text-center">
                <Link href={`/categories/${category.id}/ranking`}>
                    <a className="inline-block mt-6">See Ranking</a>
                </Link>
            </div>
        </div>
    );
};

export default CategoryReview;
