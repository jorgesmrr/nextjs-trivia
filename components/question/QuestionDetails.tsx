import Question from "../../models/question";
import { shuffle } from "../../utils/array";

export type QuestionDetailsProps = {
    question: Question;
    onAnswerClick: (string) => void;
};

const QuestionDetails: React.FC<QuestionDetailsProps> = ({
    question,
    onAnswerClick,
}) => {
    const renderAnswers = () =>
        shuffle([
            question.correct_answer,
            ...question.incorrect_answers,
        ]).map((answer, index) => (
            <div
                key={index}
                className="btn"
                onClick={() => onAnswerClick(answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
            />
        ));

    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: question.question }} />
            <div>{renderAnswers()}</div>
        </div>
    );
};

export default QuestionDetails;
