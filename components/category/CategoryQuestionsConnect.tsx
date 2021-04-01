import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Category from "../../models/category";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
    hasFinishedCategory,
    getCurrentQuestion,
    getErrorsLeft,
} from "../../store/selectors";
import {
    saveAnswer,
    setCurrentCategory,
} from "../../store/slices/categorySlice";
import CategoryQuestions from "./CategoryQuestions";

export interface CategoryQuestionsConnectProps {
    category: Category;
}

const CategoryQuestionsConnect: React.FC<CategoryQuestionsConnectProps> = ({
    category,
}) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const hasFinished = useSelector(hasFinishedCategory);
    const question = useSelector(getCurrentQuestion);
    const errosLeft = useSelector(getErrorsLeft);

    const currentQuestionIndex = useAppSelector(
        (state) => state.category.currentQuestionIndex
    );

    const totalQuestions = useAppSelector(
        (state) => (state.category.questions || []).length
    );

    useEffect(() => {
        dispatch(setCurrentCategory(category));
    }, [category]);

    useEffect(() => {
        hasFinished && router.push(`/categories/${category.id}/review`);
    }, [hasFinished]);

    const onAnswerClick = (answer) => dispatch(saveAnswer(answer));

    return (
        !hasFinished && (
            <CategoryQuestions
                category={category}
                question={question}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={totalQuestions}
                errosLeft={errosLeft}
                onAnswerClick={onAnswerClick}
            />
        )
    );
};

export default CategoryQuestionsConnect;
