import React from "react";
import IconProps from "./IconProps";

const IconChevronLeft: React.FC<IconProps> = ({
    width = 20,
    height = 20,
    onClick,
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        style={{ width, height }}
        onClick={onClick}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
        />
    </svg>
);

export default IconChevronLeft;
