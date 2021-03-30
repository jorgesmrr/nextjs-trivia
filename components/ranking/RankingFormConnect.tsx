import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { postRankingRecord } from "../../lib/api";
import { getCurrentCategory } from "../../store/selectors";
import RankingForm from "./RankingForm";
import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import { useRouter } from "next/dist/client/router";

const RankingFormConnect: React.FC = () => {
    const router = useRouter();
    const category = useAppSelector(getCurrentCategory());
    const { username, score } = useAppSelector((state) => state.user);
    const [isPostingRecord, setPostingRecord] = useState(false);
    const [apiError, setApiError] = useState(null);

    const onSubmit = async (username) => {
        setPostingRecord(null);
        setPostingRecord(true);
        try {
            await postRankingRecord({
                Username: { S: username },
                CategoryId: { N: category.id.toString() },
                Score: { N: score.toString() },
            });
            router.push(`/categories/${category.id}/ranking`);
        } catch (e) {
            setPostingRecord(false);
            setApiError(e);
        }
    };

    return isPostingRecord ? (
        <Spinner />
    ) : (
        <RankingForm
            username={username}
            errorToShow={apiError}
            onSubmit={onSubmit}
        />
    );
};

export default RankingFormConnect;
