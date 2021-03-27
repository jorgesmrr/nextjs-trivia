import React from "react";
import { Story } from "@storybook/react/types-6-0";
import CategoryReview, { CategoryReviewProps } from "./CategoryReview";
import { categoryMockFactory } from "../../utils/mocks";
import { Provider } from "react-redux";
import { Store } from "redux";

import { action } from "@storybook/addon-actions";

// A super-simple mock of a redux store
const store = {
    getState: () => {
        return {
            category: { category: categoryMockFactory.one() },
            user: { username: "Jorge", score: 500 },
        };
    },
    subscribe: () => 0,
    dispatch: action("dispatch"),
};

export default {
    title: "Category/CategoryReview",
    decorators: [
        (story) => (
            <Provider store={(store as unknown) as Store}>{story()}</Provider>
        ),
    ],
    component: CategoryReview,
};

const Template: Story<CategoryReviewProps> = (args) => (
    <CategoryReview {...args} />
);

export const Default = Template.bind({});
Default.args = { category: categoryMockFactory.one(), score: 500 };
