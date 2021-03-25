import { RankingRecord } from "../models/ranking-record";

export const fetchRankingRecords = async () => {
    const response = await fetch("/api/ranking");

    return (await response.json()) as RankingRecord[];
};

export const postRankingRecord = async (record: RankingRecord) => {
    const response = await fetch("/api/ranking", {
        method: "POST",
        body: JSON.stringify(record),
    });

    return (await response.json()) as RankingRecord[];
};
