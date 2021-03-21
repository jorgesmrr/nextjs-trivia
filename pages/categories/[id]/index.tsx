import React from "react";
import Head from "next/head";
import { fetchCategories } from "../../../lib/openTrivia";
import { GetStaticPaths, GetStaticProps } from "next";
import CategoryDetailsConnect from "../../../components/category/CategoryDetailsConnect";

type QuestionPageProps = {
    id: number;
};

const QuestionPage: React.FC<QuestionPageProps> = ({ id }) => {
    return (
        <div>
            <Head>
                <title>Trivia :: Category</title>
            </Head>

            <main>
                <CategoryDetailsConnect id={id} />
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
    return {
        props: {
            id: parseInt(params.id as string),
        },
    };
};

export default QuestionPage;
