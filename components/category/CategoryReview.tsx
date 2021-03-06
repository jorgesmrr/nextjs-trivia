import Link from "next/link";
import React from "react";
import Category from "../../models/category";
import LayoutHeader from "../layout/LayoutHeader";
import RankingFormConnect from "../ranking/RankingFormConnect";

export interface CategoryReviewProps {
    score: number;
}

const CategoryReview: React.FC<CategoryReviewProps> = ({ score }) => {
    return (
        <div className="text-center">
            <LayoutHeader
                upperSubtitle="Game Over"
                backLink="/"
                backLinkLabel="Home"
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
        </div>
    );
};

export default CategoryReview;
