import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Category from "../../models/category";
import Question from "../../models/question";
import LayoutHeader from "../layout/LayoutHeader";
import QuestionDetails from "../question/QuestionDetails";

export type CategoryQuestionsProps = {
    category: Category;
    currentQuestionIndex: number;
    question: Question;
    onAnswerClick: (string) => void;
};

const CategoryQuestions: React.FC<CategoryQuestionsProps> = ({
    category,
    currentQuestionIndex,
    question,
    onAnswerClick,
}) => {
    const [answer, setAnswer] = useState(null);

    useEffect(() => setAnswer(null), [category, question]);

    const renderNextButton = () =>
        answer ? (
            <button className="btn" onClick={onAnswerClick}>
                Next Question
            </button>
        ) : (
            <p className="text-gray-light">Select the correct answer</p>
        );

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
