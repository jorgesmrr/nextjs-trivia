import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { areQuestionsReady, getCategoryById } from "../../store/selectors";
import { setCurrentCategory } from "../../store/slices/categorySlice";
import CategoryDetails from "./CategoryDetails";

export type CategoryDetailsConnect = {
    id: number;
};

const CategoryDetailsConnect: React.FC<CategoryDetailsConnect> = ({ id }) => {
    const ready = useAppSelector(areQuestionsReady());
    const category = useAppSelector(getCategoryById(id));
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentCategory(id));
    }, [id]);

    const startCategory = () => {};

    if (ready) {
        return <CategoryDetails category={category} />;
    } else {
        // todo
        return <div>loading</div>;
    }
};

export default CategoryDetailsConnect;
