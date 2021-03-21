import React from "react";
import Head from "next/head";
import QuestionDetailsConnect from "../../../components/question/QuestionDetailsConnect";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchCategories } from "../../../lib/openTrivia";

const QuestionPage: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Trivia :: Question</title>
            </Head>

            <main>
                <QuestionDetailsConnect />
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
