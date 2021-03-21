import faker from "faker";

import { Category } from "../models/category";

interface MockFactory<T> {
    one: () => T;
    many: (count: number) => Array<T>;
}

// Categories

const getCategory = () => ({
    id: faker.random.number(),
    title: faker.lorem.words(),
});

export const categoryMockFactory: MockFactory<Category> = {
    one: getCategory,
    many: (count) => [...new Array(count)].map(getCategory),
};
