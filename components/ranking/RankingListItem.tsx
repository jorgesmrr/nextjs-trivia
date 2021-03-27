import { RankingRecord } from "../../models/ranking-record";

export type RankingListItemProps = {
    record: RankingRecord;
};

const RankingListItem: React.FC<RankingListItemProps> = ({ record }) => {
    return (
        <div className="flex justify-between rounded border border-solid border-gray-light-2 bg-white px-4 py-1">
            <div>{record.Username.S}</div>
            <div>{record.Score.N}</div>
        </div>
    );
};

export default RankingListItem;
