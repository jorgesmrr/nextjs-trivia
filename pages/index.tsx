import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import CategoriesList from "../components/category/CategoriesList";
import Category from "../models/category";
import { fetchCategories } from "../lib/openTrivia";

export interface HomeProps {
    categories: Category[];
}

const Home: React.FC<HomeProps> = ({ categories }) => {
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
