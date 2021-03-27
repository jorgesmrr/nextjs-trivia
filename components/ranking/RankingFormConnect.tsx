import React from "react";
import { useAppSelector } from "../../store/hooks";
import { postRankingRecord } from "../../lib/api";
import { getCurrentCategory } from "../../store/selectors";
import RankingForm from "./RankingForm";

const RankingFormConnect: React.FC = () => {
    const category = useAppSelector(getCurrentCategory());
    const { username, score } = useAppSelector((state) => state.user);

    const onSubmit = (username) => {
        postRankingRecord({
            Username: { S: username },
            CategoryId: { N: category.id.toString() },
            Score: { N: score.toString() },
        });
    };

    return <RankingForm username={username} onSubmit={onSubmit} />;
};

export default RankingFormConnect;
