import React, { useState } from "react";

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
                <input
                    type="text"
                    className="px-2 rounded border-2 border-solid border-primary hover:border-primary-light-2 focus:border-primary-dark-3 outline-none"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <button className="btn ml-2" onClick={() => onSubmit(username)}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default RankingForm;
