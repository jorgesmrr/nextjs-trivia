import faker from "faker";

import Category from "../models/category";
import Question from "../models/question";

interface MockFactory<T> {
    one: () => T;
    many: (count: number) => Array<T>;
}

// Categories

const getCategory: () => Category = () => ({
    id: faker.random.number(),
    name: faker.lorem.words(),
});

export const categoryMockFactory: MockFactory<Category> = {
    one: getCategory,
    many: (count) => [...new Array(count)].map(getCategory),
};

// Questions

const getQuestion: () => Question = () => ({
    question: faker.lorem.words(),
    correct_answer: faker.lorem.words(),
    incorrect_answers: [...new Array(3)].map((i) => faker.lorem.words()),
});

export const questionMockFactory: MockFactory<Question> = {
    one: getQuestion,
    many: (count) => [...new Array(count)].map(getQuestion),
};
