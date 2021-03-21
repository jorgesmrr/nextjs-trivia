import React from "react";
import { Story } from "@storybook/react/types-6-0";
import QuestionDetails, { QuestionDetailsProps } from "./QuestionDetails";
import { questionMockFactory } from "../../utils/mocks";

export default {
    title: "Question/Detail",
    component: QuestionDetails,
};

const Template: Story<QuestionDetailsProps> = (args) => (
    <QuestionDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
    question: questionMockFactory.one(),
    currentIndex: 0,
    totalQuestions: 1,
};
