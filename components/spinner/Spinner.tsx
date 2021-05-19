import LibSpinner, {
    SpinnerProps,
} from "@bit/jorgemoreira.headless-react.progress.spinner";
import React from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./../../tailwind.config.js";

const { theme } = resolveConfig(tailwindConfig);

const Spinner: React.FC<SpinnerProps> = (props) => (
    <LibSpinner
        primaryColor={theme.colors.primary.DEFAULT}
        secondaryColor={theme.colors.gray["light-3"]}
        {...props}
    />
);

export default Spinner;
