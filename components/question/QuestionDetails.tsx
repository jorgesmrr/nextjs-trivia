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
            ]).map((a) => <div onClick={() => onAnswerClick(a)}>{a}</div>)
        );
    }, [question]);

    const onAnswerClick = (answer) =>
        setResult(answer === question.correct_answer);

    const button =
        currentIndex + 1 < totalQuestions ? (
            <button onClick={showNext}>Next</button>
        ) : (
            <Link href="/">Back to Home</Link>
        );

    return (
        <div>
            <div>
                {currentIndex + 1} of {totalQuestions}
            </div>
            <div>{question.question}</div>
            <div>{renderedAnswers}</div>
            {result !== null && (
                <div>
                    {result.toString()}
                    <div>{button}</div>
                </div>
            )}
        </div>
    );
};

export default QuestionDetails;
