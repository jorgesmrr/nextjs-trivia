import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { postRankingRecord } from "../../lib/api";
import { getCurrentCategory } from "../../store/selectors";
import TextField from "@bit/jorgemoreira.react.input.text-field";

const RankingForm: React.FC = () => {
    const category = useAppSelector(getCurrentCategory());
    const { username: savedUsername, score } = useAppSelector(
        (state) => state.user
    );
    const [username, setUsername] = useState(savedUsername || "");

    const submit = () => {
        postRankingRecord({
            Username: { S: username },
            CategoryId: { N: category.id.toString() },
            Score: { N: score.toString() },
        });
    };

    return (
        <div>
            <TextField
                label="Save your record with your username"
                value={username}
                onChange={setUsername}
            />
            <button className="btn" onClick={submit}>
                Save
            </button>
        </div>
    );
};

export default RankingForm;
