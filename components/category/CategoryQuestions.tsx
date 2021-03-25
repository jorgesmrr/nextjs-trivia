import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import Category from "../../models/category";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
    goToNextQuestion,
    saveAnswer,
    setCurrentCategory,
} from "../../store/slices/categorySlice";
import { calculateScore } from "../../store/slices/userSlice";
import LayoutHeader from "../layout/LayoutHeader";
import QuestionDetails from "../question/QuestionDetails";

type CategoryQuestionsProps = {
    category: Category;
};

const CategoryQuestions: React.FC<CategoryQuestionsProps> = ({ category }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("fgudsyavbf");
        dispatch(setCurrentCategory(category));
    }, [category]);

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

    const onAnswerClick = (answer) => {
        dispatch(saveAnswer(answer));

        if (currentQuestionIndex + 1 < totalQuestions) {
            dispatch(goToNextQuestion());
        } else {
            dispatch(calculateScore());
            router.push(`/categories/${category.id}/review`);
        }
    };

    return question ? (
        <div>
            <LayoutHeader
                title={`Question ${
                    currentQuestionIndex + 1
                } of ${totalQuestions}`}
                upperSubtitle={category.name}
            />
            <QuestionDetails
                question={question}
                onAnswerClick={onAnswerClick}
            />
        </div>
    ) : (
        <div>loading</div>
    );
};

export default CategoryQuestions;
