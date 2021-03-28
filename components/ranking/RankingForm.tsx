import React, { useState } from "react";
import TextField from "@bit/jorgemoreira.react.input.text-field";

export type RankingFormProps = {
    username: string;
    onSubmit: (string) => void;
};

const RankingForm: React.FC<RankingFormProps> = ({
    username: initialUsername,
    onSubmit,
}) => {
    const [username, setUsername] = useState(initialUsername || "");

    return (
        <div className="text-center">
            <p className="mb-2">Choose a username to save your score:</p>
            <div className="inline-flex">
                <TextField
                    type="text"
                    value={username}
                    onChange={setUsername}
                />
                <button className="btn ml-2" onClick={() => onSubmit(username)}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default RankingForm;
