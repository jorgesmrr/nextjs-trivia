import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import RankingList from "../../../components/ranking/RankingList";
import { fetchRankingRecords } from "../../../lib/api";
import { fetchCategories } from "../../../lib/openTrivia";
import Category from "../../../models/category";

type RankingPageProps = {
    category: Category;
};

const RankingPage: React.FC<RankingPageProps> = ({ category }) => {
    const [records, setRecords] = useState(null);

    useEffect(() => {
        const fetch = async () => setRecords(await fetchRankingRecords());

        fetch();
    }, [category]);

    return (
        <div>
            <Head>
                <title>Trivia - {category && category.name} - Ranking</title>
            </Head>
            <main>
                <RankingList category={category} records={records} />
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

export default RankingPage;
