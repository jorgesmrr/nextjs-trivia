import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { postRankingRecord } from "../../lib/api";
import { getCurrentCategory } from "../../store/selectors";
import RankingForm from "./RankingForm";
import { useRouter } from "next/dist/client/router";
import { calculateScore } from "../../store/slices/userSlice";
import { reset } from "../../store/slices/categorySlice";
import Spinner from "../spinner/Spinner";

const RankingFormConnect: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const category = useAppSelector(getCurrentCategory);
    const { username, score } = useAppSelector((state) => state.user);
    const [isPostingRecord, setPostingRecord] = useState(false);
    const [usernameError, setUsernameError] = useState(null);

    useEffect(() => {
        if (category) {
            dispatch(calculateScore());
        } else {
            router.push("/");
        }
    }, []);

    const onSubmit = async (username) => {
        if (!/^[a-zA-Z0-9-]+$/.test(username)) {
            setUsernameError("Please use only alphanumeric characteres");
            return;
        }

        setPostingRecord(null);
        setPostingRecord(true);
        try {
            const categoryId = category.id.toString();

            await postRankingRecord({
                Username: { S: username },
                CategoryId: { N: categoryId },
                Score: { N: score.toString() },
            });

            dispatch(reset());
            router.push(`/categories/${categoryId}/ranking`);
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
