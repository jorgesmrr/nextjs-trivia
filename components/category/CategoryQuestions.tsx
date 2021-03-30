import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Category from "../../models/category";
import Question from "../../models/question";
import LayoutHeader from "../layout/LayoutHeader";
import QuestionDetails from "../question/QuestionDetails";

export type CategoryQuestionsProps = {
    category: Category;
    question: Question;
    currentQuestionIndex: number;
    totalQuestions: number;
    onAnswerClick: (string) => void;
};

const CategoryQuestions: React.FC<CategoryQuestionsProps> = ({
    category,
    question,
    currentQuestionIndex,
    totalQuestions,
    onAnswerClick,
}) => {
    const [answer, setAnswer] = useState(null);

    useEffect(() => setAnswer(null), [category, question]);

    const renderNextButton = () => {
        if (answer) {
            const buttonLabel =
                currentQuestionIndex + 1 === totalQuestions
                    ? "Finish"
                    : "Next Question";
            return (
                <button className="btn" onClick={() => onAnswerClick(answer)}>
                    {buttonLabel}
                </button>
            );
        } else {
            return <p className="text-gray-light">Select the correct answer</p>;
        }
    };

    const renderContent = () =>
        question ? (
            <div>
                <p className="subtitle mt-8 mb-2">{`Question ${
                    currentQuestionIndex + 1
                }`}</p>
                <QuestionDetails
                    question={question}
                    selectedAnswer={answer}
                    onAnswerClick={setAnswer}
                />
                <div className="mt-12 mb-4">{renderNextButton()}</div>
            </div>
        ) : (
            <Spinner />
        );

    return (
        <div className="text-center">
            <LayoutHeader
                title={category.name}
                backLink={`/categories/${category.id}`}
                backLinkLabel="Give Up"
            />
            {renderContent()}
        </div>
    );
};

export default CategoryQuestions;
