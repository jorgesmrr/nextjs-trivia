import React from "react";
import { Story } from "@storybook/react/types-6-0";
import RankingList, { RankingListProps } from "./RankingList";
import { rankingRecordMockFactory } from "../../utils/mocks";

export default {
    title: "Ranking/RankingList",
    component: RankingList,
};

const Template: Story<RankingListProps> = (args) => <RankingList {...args} />;

export const Default = Template.bind({});
Default.args = {
    category: rankingRecordMockFactory.one(),
    records: rankingRecordMockFactory.many(),
};
