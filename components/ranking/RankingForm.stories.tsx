import React from "react";
import { Story } from "@storybook/react/types-6-0";
import RankingForm, { RankingFormProps } from "./RankingForm";

export default {
    title: "Ranking/RankingForm",
    component: RankingForm,
};

const Template: Story<RankingFormProps> = (args) => <RankingForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    username: "Testing",
    onSubmit: () => {},
};
