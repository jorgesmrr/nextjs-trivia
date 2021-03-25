import React from "react";
import Category from "../../models/category";
import { RankingRecord } from "../../models/ranking-record";
import LayoutHeader from "../layout/LayoutHeader";

export type RankingListProps = {
    category: Category;
    records: RankingRecord[];
};

const RankingList: React.FC<RankingListProps> = ({ category, records }) => {
    const renderRanking = () => {
        return records.map((record, index) => (
            <div className="flex justify-between" key={index}>
                <div>{record.Username.S}</div>
                <div>{record.Score.N}</div>
            </div>
        ));
    };

    const renderContent = () => {
        if (records) {
            return <div>{renderRanking()}</div>;
        } else {
            return <div>loading</div>;
        }
    };

    return (
        <div>
            <LayoutHeader title={category.name} upperSubtitle="Ranking of" />
            {renderContent()}
        </div>
    );
};

export default RankingList;
