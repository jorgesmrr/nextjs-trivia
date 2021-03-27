import faker from "faker";

import Category from "../models/category";
import Question from "../models/question";
import { RankingRecord } from "../models/ranking-record";

interface MockFactory<T> {
    one: () => T;
    many: (count?: number) => Array<T>;
}

// Categories

const getCategory: () => Category = () => ({
    id: faker.random.number(),
    name: faker.lorem.words(),
});

export const categoryMockFactory: MockFactory<Category> = {
    one: getCategory,
    many: (count = 10) => [...new Array(count)].map(getCategory),
};

// Questions

const getQuestion: () => Question = () => ({
    question: faker.lorem.words(),
    correct_answer: faker.lorem.words(),
    incorrect_answers: [...new Array(3)].map((i) => faker.lorem.words()),
});

export const questionMockFactory: MockFactory<Question> = {
    one: getQuestion,
    many: (count = 10) => [...new Array(count)].map(getQuestion),
};

// Ranking Records

const getRankingRecord: () => RankingRecord = () => ({
    Username: { S: faker.name.firstName() },
    Score: { N: faker.random.number().toString() },
    CategoryId: { N: "1" },
});

export const rankingRecordMockFactory: MockFactory<RankingRecord> = {
    one: getRankingRecord,
    many: (count = 10) => [...new Array(count)].map(getRankingRecord),
};
