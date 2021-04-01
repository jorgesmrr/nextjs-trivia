import React from "react";

export interface QuestionAnswerProps {
    label: string;
    answer: string;
    correct?: boolean;
    incorrect?: boolean;
    missed?: boolean;
    disabled?: boolean;
    onClick: () => void;
}

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({
    label,
    answer,
    correct,
    incorrect,
    missed,
    disabled,
    onClick,
}) => {
    const bgClass = correct
        ? "text-white bg-green"
        : incorrect
        ? "text-white bg-red"
        : missed
        ? "text-green border-green border-2"
        : `text-primary bg-white ${
              !disabled &&
              "cursor-pointer hover:bg-primary-light-3 hover:text-white"
          }`;

    const circleBgClass = correct
        ? "bg-white text-green"
        : incorrect
        ? "bg-white text-red"
        : missed
        ? "bg-green text-white"
        : "bg-primary text-white";

    return (
        <div
            className={`text-left flex items-center rounded shadow py-2 px-2 ${bgClass}`}
            onClick={() => !disabled && onClick()}
        >
            <div
                className={`relative flex-none rounded-full w-8 h-8 mr-4 ${circleBgClass}`}
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 block">
                    {label}
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
    );
};

export default QuestionAnswer;
