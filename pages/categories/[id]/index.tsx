import React from "react";
import Head from "next/head";
import { fetchCategories } from "../../../lib/openTrivia";
import { GetStaticPaths, GetStaticProps } from "next";
import Category from "../../../models/category";
import CategoryDetails from "../../../components/category/CategoryDetails";

type QuestionPageProps = {
    category: Category;
};

const QuestionPage: React.FC<QuestionPageProps> = ({ category }) => {
    return (
        <div>
            <Head>
                <title>Trivia :: Category</title>
            </Head>

            <main>
                <CategoryDetails category={category} />
            </main>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = await fetchCategories();
    const paths = categories.map((c) => ({ params: { id: c.id.toString() } }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const categories = await fetchCategories();

    return {
        props: {
            category: categories.find(
                (category) => category.id === parseInt(params.id as string)
            ),
        },
    };
};

export default QuestionPage;
