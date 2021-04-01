import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import Category from "../../models/category";
import { useAppSelector } from "../../store/hooks";
import { getQuestions } from "../../store/selectors";
import CategoryReview from "./CategoryReview";

export type CategoryReviewConnectProps = {
    category: Category;
};

const CategoryReviewConnect: React.FC<CategoryReviewConnectProps> = ({
    category,
}) => {
    const router = useRouter();
    const questions = useAppSelector(getQuestions);
    const score = useAppSelector((state) => state.user.score);

    useEffect(() => {
        !questions && router.push(`/categories/${category.id}`);
    }, []);

    return questions && <CategoryReview category={category} score={score} />;
};

export default CategoryReviewConnect;
