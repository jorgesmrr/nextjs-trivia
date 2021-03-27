import React from "react";
import { Story } from "@storybook/react/types-6-0";
import QuestionAnswer, { QuestionAnswerProps } from "./QuestionAnswer";

export default {
    title: "Question/QuestionAnswer",
    component: QuestionAnswer,
};

const Template: Story<QuestionAnswerProps> = (args) => (
    <QuestionAnswer {...args} />
);

export const Default = Template.bind({});
Default.args = {
    label: "A",
    answer: "Foo",
    onClick: () => {},
};
