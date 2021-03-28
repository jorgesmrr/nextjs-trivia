import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import Category from "../../models/category";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
    goToNextQuestion,
    saveAnswer,
    setCurrentCategory,
} from "../../store/slices/categorySlice";
import { calculateScore } from "../../store/slices/userSlice";
import CategoryQuestions from "./CategoryQuestions";

export type CategoryQuestionsConnectProps = {
    category: Category;
};

const CategoryQuestionsConnect: React.FC<CategoryQuestionsConnectProps> = ({
    category,
}) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [answer, setAnswer] = useState(null);

    const currentQuestionIndex = useAppSelector(
        (state) => state.category.currentQuestionIndex
    );

    const question = useAppSelector((state) =>
        state.category.currentQuestionIndex !== null
            ? (state.category.questions || [])[
                  state.category.currentQuestionIndex
              ]
            : null
    );

    const totalQuestions = useAppSelector(
        (state) => (state.category.questions || []).length
    );

    useEffect(() => {
        dispatch(setCurrentCategory(category));
    }, [category]);

    useEffect(() => setAnswer(null), [category, question]);

    const onAnswerClick = () => {
        dispatch(saveAnswer(answer));

        if (currentQuestionIndex + 1 < totalQuestions) {
            dispatch(goToNextQuestion());
        } else {
            dispatch(calculateScore());
            router.push(`/categories/${category.id}/review`);
        }
    };

        return <CategoryQuestions
            category={category}
            question={question}
            currentQuestionIndex={currentQuestionIndex}
            onAnswerClick={onAnswerClick}
        />
};

export default CategoryQuestionsConnect;
