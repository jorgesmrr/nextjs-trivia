import React from "react";
import { Story } from "@storybook/react/types-6-0";
import CategoryListItem, { CategoryListItemProps } from "./CategoryListItem";
import { categoryMockFactory } from "../../utils/mocks";

export default {
    title: "Category/CategoryListItem",
    component: CategoryListItem,
};

const Template: Story<CategoryListItemProps> = (args) => (
    <CategoryListItem {...args} />
);

export const Default = Template.bind({});
Default.args = { category: categoryMockFactory.one() };
