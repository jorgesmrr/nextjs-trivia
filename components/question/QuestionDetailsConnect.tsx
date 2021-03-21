import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { goToNextQuestion } from "../../store/slices/categorySlice";
import QuestionDetails from "./QuestionDetails";

const QuestionDetailsConnect: React.FC = () => {
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

    const dispatch = useAppDispatch();
    const showNext = () => dispatch(goToNextQuestion());

    if (question !== null) {
        return (
            <QuestionDetails
                question={question}
                currentIndex={currentQuestionIndex}
                totalQuestions={totalQuestions}
                showNext={showNext}
            />
        );
    } else {
        // todo
        return <div>error</div>;
    }
};

export default QuestionDetailsConnect;
