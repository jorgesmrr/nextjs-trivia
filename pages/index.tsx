import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import CategoriesList from "../components/category/CategoriesList";
import Category from "../models/category";
import { fetchCategories } from "../lib/openTrivia";
import { useAppDispatch } from "../store/hooks";
import { setCategories } from "../store/slices/categorySlice";

export type HomeProps = { categories: Category[] };

const Home: React.FC<HomeProps> = ({ categories }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCategories(categories));
    }, [categories]);

    return (
        <div>
            <Head>
                <title>Trivia :: Home</title>
            </Head>

            <main>
                <CategoriesList categories={categories} />
            </main>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const categories = await fetchCategories();

    return {
        props: { categories },
    };
};

export default Home;
