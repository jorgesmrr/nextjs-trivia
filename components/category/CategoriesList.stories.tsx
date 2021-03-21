import React from "react";
import { Story } from "@storybook/react/types-6-0";
import CategoriesList, { CategoriesListProps } from "./CategoriesList";
import { categoryMockFactory } from "../../utils/mocks";

export default {
    title: "Category/List",
    component: CategoriesList,
};

const Template: Story<CategoriesListProps> = (args) => (
    <CategoriesList {...args} />
);

export const Default = Template.bind({});
Default.args = { categories: categoryMockFactory.many(10) };
