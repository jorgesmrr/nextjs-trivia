import Spinner from "@bit/jorgemoreira.react.progress.spinner";
import React from "react";
import Category from "../../models/category";
import { RankingRecord } from "../../models/ranking-record";
import LayoutHeader from "../layout/LayoutHeader";
import RankingListItem from "../ranking/RankingListItem";
import CenteredImage from "../ui/CenteredImage";

export type RankingListProps = {
    category: Category;
    records: RankingRecord[];
    hasFailedToFetch: boolean;
};

const RankingList: React.FC<RankingListProps> = ({
    category,
    records,
    hasFailedToFetch,
}) => {
    const renderRanking = () => {
        return records.map((record) => (
            <RankingListItem key={record.Username.S} record={record} />
        ));
    };

    const renderContent = () => {
        if (hasFailedToFetch) {
            return (
                <p className="text-center">
                    There was an error while loading the records
                </p>
            );
        } else if (records) {
            if (records.length) {
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
                return (
                    <p className="text-center">
                        No one has played this category yet
                    </p>
                );
            }
        } else {
            return <Spinner />;
        }
    };

    return (
        <div>
            <LayoutHeader
                title="Ranking"
                subtitle={`In ${category.name}`}
                backLink={`/categories/${category.id}`}
                backLinkLabel="Category"
            />
            <CenteredImage file="winners.svg" />
            {renderContent()}
        </div>
    );
};

export default RankingList;
