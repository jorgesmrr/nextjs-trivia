import React from "react";
import { Story } from "@storybook/react/types-6-0";
import CategoryQuestions, { CategoryQuestionsProps } from "./CategoryQuestions";
import { categoryMockFactory, questionMockFactory } from "../../utils/mocks";

export default {
    title: "Category/CategoryQuestions",
    component: CategoryQuestions,
};

const Template: Story<CategoryQuestionsProps> = (args) => (
    <CategoryQuestions {...args} />
);

export const Default = Template.bind({});
Default.args = {
    category: categoryMockFactory.one(),
    question: questionMockFactory.one(),
    currentQuestionIndex: 0,
    onAnswerClick: () => {},
};
