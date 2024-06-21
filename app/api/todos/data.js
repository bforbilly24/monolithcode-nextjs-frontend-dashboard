import { faker } from "@faker-js/faker";

function generateFakeData(numItems) {
  const data = [];

  for (let i = 1; i <= numItems; i++) {
    const newItem = {
      userId: i,
      id: i,
      title: faker.lorem.sentence(),
      completed: false,
    };
    data.push(newItem);
  }

  return data;
}

export const demoData = generateFakeData(100);
