import { faker } from "@faker-js/faker";
import { formatDate } from "@/lib/utils";

function generateComments(numItems) {
  const data = [];
  const currentYear = new Date().getFullYear();
  const assignDate = faker.date.past(
    `${currentYear}-01-01`,
    `${currentYear}-12-31`
  );
  for (let i = 1; i <= numItems; i++) {
    const newItem = {
      id: i,
      avatar: faker.image.avatarLegacy(),
      name: faker.person.fullName({ sex: "male" }),
      text: faker.lorem.paragraph(2),
      date: formatDate(assignDate),
      subTaskId: 1,
    };
    data.push(newItem);
  }

  return data;
}

export const comments = generateComments(6);
