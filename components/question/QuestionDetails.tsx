import { useEffect, useState } from "react";
import Question from "../../models/question";
import { useAppDispatch } from "../../store/hooks";
import { shuffle } from "../../utils/array";
import { goToNextQuestion } from "../../store/slices/categorySlice";
import Link from "next/link";

export type QuestionDetailsProps = {
    question: Question;
    currentIndex: number;
    totalQuestions: number;
    showNext: () => void;
};

const QuestionDetails: React.FC<QuestionDetailsProps> = ({
    question,
    currentIndex,
    totalQuestions,
    showNext,
}) => {
    const [result, setResult] = useState(null);
    const [renderedAnswers, setRenderedAnswers] = useState(null);

    useEffect(() => {
        setResult(null);
        setRenderedAnswers(
            shuffle([
                question.correct_answer,
                ...question.incorrect_answers,
            ]).map((answer) => (
                <div
                    className="btn"
                    onClick={() => onAnswerClick(answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            ))
        );
    }, [question]);

    const onAnswerClick = (answer) =>
        setResult(answer === question.correct_answer);

    const renderResult = () => {
        if (result === null) return null;
        if (result)
            return <p className="text-green-600 my-5">Correct answer \o/</p>;

        return <p className="text-red-600 my-5">Incorrect answer :/</p>;
    };

    const renderNextButton = () => {
        if (result === null) return null;

        return currentIndex + 1 < totalQuestions ? (
            <button className="btn" onClick={showNext}>
                Next question
            </button>
        ) : (
            <Link href="/">
                <a className="btn">Back to Home</a>
            </Link>
        );
    };

    return (
        <div className="text-center">
            <p className="subtitle">
                {currentIndex + 1} of {totalQuestions}
            </p>
            <h1 dangerouslySetInnerHTML={{ __html: question.question }} />
            <div>{renderedAnswers}</div>

            <div>{renderResult()}</div>
            <div>{renderNextButton()}</div>
        </div>
    );
};

export default QuestionDetails;
