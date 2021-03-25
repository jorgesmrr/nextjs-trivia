import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import CategoryReview from "../../../components/category/CategoryReview";
import { fetchCategories } from "../../../lib/openTrivia";
import Category from "../../../models/category";

type CategoryReviewPageProps = {
    category: Category;
};

const CategoryReviewPage: React.FC<CategoryReviewPageProps> = ({
    category,
}) => {
    return (
        <div>
            <Head>
                <title>Trivia - {category && category.name} - Ranking</title>
            </Head>
            <main>
                <CategoryReview category={category} />
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

export default CategoryReviewPage;
