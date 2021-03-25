import React from "react";
import Question from "../../models/question";

export type CategoryReviewQuestionProps = {
    question: Question;
    answer: string;
};

const CategoryReviewQuestion: React.FC<CategoryReviewQuestionProps> = ({
    question,
    answer,
}) => {
    return (
        <div>
            <div>{question.question}</div>
            <div>{question.correct_answer}</div>
            <div>{answer}</div>
        </div>
    );
};

export default CategoryReviewQuestion;
