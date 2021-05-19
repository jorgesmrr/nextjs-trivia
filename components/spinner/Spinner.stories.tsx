import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Spinner from "./Spinner";
import { SpinnerProps } from "@bit/jorgemoreira.headless-react.progress.spinner";

export default {
    title: "Spinner/Spinner",
    component: Spinner,
};

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
