import { Router, useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import Category from "../../models/category";
import { useAppSelector } from "../../store/hooks";
import { getAnswers, getQuestions } from "../../store/selectors";
import LayoutHeader from "../layout/LayoutHeader";
import RankingForm from "../ranking/RankingForm";
import CategoryReviewQuestion from "./CategoryReviewQuestion";

export type CategoryReviewProps = {
    category: Category;
};

const CategoryReview: React.FC<CategoryReviewProps> = ({ category }) => {
    const router = useRouter();
    const questions = useAppSelector(getQuestions());
    const answers = useAppSelector(getAnswers());
    const score = useAppSelector((state) => state.user.score);

    const renderedQuestions =
        questions &&
        questions
            .slice(0, answers.length)
            .map((question, index) => (
                <CategoryReviewQuestion
                    key={index}
                    question={question}
                    answer={answers[index]}
                />
            ));

    useEffect(() => {
        if (!questions) {
            router.push("/");
        }
    }, [questions]);

    return (
        questions && (
            <div>
                <LayoutHeader
                    title={category.name}
                    description={`Your score is ${score}`}
                />
                <div>{renderedQuestions}</div>
                <hr />
                <RankingForm />
            </div>
        )
    );
};

export default CategoryReview;
