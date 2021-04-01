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
    const [usernameError, setUsernameError] = useState(null);

    const onSubmit = async (username) => {
        if (!/^[a-zA-Z0-9\-]+$/.test(username)) {
            setUsernameError("Please use only alphanumeric characteres");
            return;
        }

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
            setUsernameError(e);
        }
    };

    return isPostingRecord ? (
        <Spinner />
    ) : (
        <RankingForm
            username={username}
            errorToShow={usernameError}
            onSubmit={onSubmit}
        />
    );
};

export default RankingFormConnect;
