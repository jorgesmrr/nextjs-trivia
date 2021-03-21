import React from "react";
import { Story } from "@storybook/react/types-6-0";
import CategoryDetails, { CategoryDetailsProps } from "./CategoryDetails";
import { categoryMockFactory } from "../../utils/mocks";

export default {
    title: "Category/Details",
    component: CategoryDetails,
};

const Template: Story<CategoryDetailsProps> = (args) => (
    <CategoryDetails {...args} />
);

export const Default = Template.bind({});
Default.args = { category: categoryMockFactory.one() };
