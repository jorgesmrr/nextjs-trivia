import React from "react";

export type QuestionAnswerProps = {
    label: string;
    answer: string;
    success?: boolean;
    error?: boolean;
    onClick: () => void;
};

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({
    label,
    answer,
    success,
    error,
    onClick,
}) => {
    const bgClass = success
        ? "text-white bg-green-500"
        : error
        ? //? "text-white bg-white border border-solid border-green-500"
          "text-white bg-red-500"
        : "text-primary bg-white hover:bg-primary-light-3";

    const circleBgClass = success
        ? "bg-white text-green-500"
        : error
        ? "bg-white text-red-500"
        : "bg-primary text-white";

    return (
        <div
            className={`flex items-center rounded shadow cursor-pointer py-2 px-2 hover:text-white ${bgClass}`}
            onClick={onClick}
        >
            <div
                className={`relative rounded-full  w-8 h-8 mr-4 ${circleBgClass}`}
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
