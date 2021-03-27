import React from "react";
import { Story } from "@storybook/react/types-6-0";
import RankingListItem, { RankingListItemProps } from "./RankingListItem";
import { rankingRecordMockFactory } from "../../utils/mocks";

export default {
    title: "Ranking/RankingListItem",
    component: RankingListItem,
};

const Template: Story<RankingListItemProps> = (args) => (
    <RankingListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    record: rankingRecordMockFactory.one(),
};
