import { RankingRecord } from "../models/ranking-record";

export const fetchRankingRecords = async (categoryId, username = null) => {
    const url = new URL("/api/ranking", window.location.href);

    const params: any = { category_id: categoryId };
    if (username) params.username = username;
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url.toString());
    return (await response.json()) as RankingRecord[];
};

export const postRankingRecord = async (record: RankingRecord) => {
    const existentData = await fetchRankingRecords(
        record.CategoryId.N,
        record.Username.S
    );
    if (existentData.length) throw "This username is already used";

    await fetch("/api/ranking", {
        method: "POST",
        body: JSON.stringify(record),
    });
};
