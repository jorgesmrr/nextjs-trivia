import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import rootReducer, { RootState } from "./rootReducer";

const makeStore: MakeStore = () => {
    const store = configureStore({
        reducer: rootReducer,
    });

    if (process.env.NODE_ENV === "development" && module.hot) {
        module.hot.accept("./rootReducer", () => {
            const newRootReducer = require("./rootReducer").default;
            store.replaceReducer(newRootReducer);
        });
    }

    return store;
};

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
