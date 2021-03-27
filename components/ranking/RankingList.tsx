import React from "react";
import Category from "../../models/category";
import { RankingRecord } from "../../models/ranking-record";
import LayoutHeader from "../layout/LayoutHeader";
import RankingListItem from "../ranking/RankingListItem";
import CenteredImage from "../ui/CenteredImage";

export type RankingListProps = {
    category: Category;
    records: RankingRecord[];
};

const RankingList: React.FC<RankingListProps> = ({ category, records }) => {
    const renderRanking = () => {
        return records.map((record, index) => (
            <RankingListItem key={index} record={record} />
        ));
    };

    const renderContent = () => {
        if (records) {
            return (
                <div className="bg-gray-light-3 shadow-md rounded p-4">
                    <div className="flex justify-between font-montserrat text-xs font-semibold uppercase text-gray-light px-4 mb-4">
                        <div>Username</div>
                        <div>Points</div>
                    </div>
                    <div className="grid gap-2">{renderRanking()}</div>
                </div>
            );
        } else {
            return <div>loading</div>;
        }
    };

    return (
        <div>
            <LayoutHeader title="Ranking" subtitle={`In ${category.name}`} />
            <CenteredImage file="winners.svg" />
            {renderContent()}
        </div>
    );
};

export default RankingList;
