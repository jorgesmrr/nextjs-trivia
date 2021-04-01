import { useEffect, useState } from "react";
import Question from "../../models/question";
import { shuffle } from "../../utils/array";
import QuestionAnswer from "./QuestionAnswer";

export interface QuestionDetailsProps {
    question: Question;
    selectedAnswer?: string;
    onAnswerClick: (string) => void;
}

const QuestionDetails: React.FC<QuestionDetailsProps> = ({
    question,
    selectedAnswer,
    onAnswerClick,
}) => {
    const [answers, setAnswers] = useState([]);
    const answersLabels = "ABCD";

    useEffect(() => {
        const shuffledAnswers = shuffle([
            question.correct_answer,
            ...question.incorrect_answers,
        ]);

        setAnswers(shuffledAnswers);
    }, [question]);

    const renderAnswers = () =>
        answers.map((answer, index) => (
            <QuestionAnswer
                key={index}
                answer={answer}
                label={answersLabels[index]}
                onClick={() => !selectedAnswer && onAnswerClick(answer)}
                correct={
                    selectedAnswer &&
                    answer === selectedAnswer &&
                    answer === question.correct_answer
                }
                incorrect={
                    selectedAnswer &&
                    answer === selectedAnswer &&
                    answer !== question.correct_answer
                }
                missed={
                    selectedAnswer &&
                    answer !== selectedAnswer &&
                    answer === question.correct_answer
                }
                disabled={!!selectedAnswer}
            />
        ));

    return (
        <div>
            <h2
                className="mb-12"
                dangerouslySetInnerHTML={{ __html: question.question }}
            />
            <div className="grid sm:grid-cols-2 gap-4">{renderAnswers()}</div>
        </div>
    );
};

export default QuestionDetails;
