import React, { useState } from "react";
import TextField from "@bit/jorgemoreira.react.input.text-field";

export interface RankingFormProps {
    username: string;
    errorToShow: string;
    onSubmit: (string) => void;
}

const RankingForm: React.FC<RankingFormProps> = ({
    username: initialUsername,
    errorToShow,
    onSubmit,
}) => {
    const [username, setUsername] = useState(initialUsername || "");

    return (
        <div className="text-center">
            <p className="mb-2">Choose a username to save your score:</p>
            <div className="inline-flex flex-wrap mb-2">
                <div className="w-full mb-2 sm:w-auto sm:mb-0">
                    <TextField
                        type="text"
                        value={username}
                        onChange={setUsername}
                    />
                </div>
                <button
                    className="btn w-full sm:ml-2 sm:w-auto"
                    onClick={() => onSubmit(username)}
                >
                    Save
                </button>
            </div>
            <p className="text-red text-sm">{errorToShow}</p>
        </div>
    );
};

export default RankingForm;
