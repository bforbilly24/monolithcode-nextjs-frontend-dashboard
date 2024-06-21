import avatar from "@/public/images/avatar/avatar-7.jpg";
import img1 from "@/public/images/all-img/headphone-2.png";
import { faker } from "@faker-js/faker";
import { formatDate } from "@/lib/utils";
import { statuses, generateAssignments, priorities } from "../projects/data";
export const tasks = [
  {
    boardId: 1,
    id: 1,
    title: "the dashtail template",
    desc: "Create a Brand logo design for a DashTail Admin.",
    status: "inprogress",
    tags: ["design", "planning"],
    priority: "high",
    assign: [
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rakib",
        image: avatar,
      },
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rahad",
        image: avatar,
      },
    ],
    image: img1,
    category: "ui & ux",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "31 Jan,2024",
    time: "5:19pm",
    list: [
      {
        id: "item-1",
        title: "Collect Data",
      },
      {
        id: "item-2",
        title: "Collect Icons",
      },
      {
        id: "item-1",
        title: "Make Project Layout",
      },
    ],
  },
  {
    boardId: 2,
    id: 2,
    title: "the dashtail template",
    desc: "Create a Brand logo design for a DashTail Admin.",
    status: "completed",
    tags: ["development", "planning"],
    priority: "low",
    assign: [
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rakib",
        image: avatar,
      },
    ],
    image: img1,
    category: "ui & ux",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "31 Jan,2024",
    time: "5:19pm",
    list: [
      {
        id: "item-1",
        title: "Collect Data",
      },
      {
        id: "item-2",
        title: "Collect Icons",
      },
      {
        id: "item-1",
        title: "Make Project Layout",
      },
    ],
  },
  {
    boardId: 3,
    id: 3,
    title: "the dashtail template",
    desc: "Create a Brand logo design for a DashTail Admin.",
    status: "inprogress",
    tags: ["development", "planning"],
    priority: "medium",
    assign: [
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rakib",
        image: avatar,
      },
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rahad",
        image: avatar,
      },
    ],
    image: "",
    category: "ui & ux",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "31 Jan,2024",
    time: "5:19pm",
    list: [
      {
        id: "item-1",
        title: "Collect Data",
      },
      {
        id: "item-2",
        title: "Collect Icons",
      },
      {
        id: "item-1",
        title: "Make Project Layout",
      },
    ],
  },
  {
    boardId: 3,
    id: 4,
    title: "New template",
    desc: "Create a Brand logo design for a DashTail Admin.",
    status: "inprogress",
    tags: ["development", "planning"],
    priority: "medium",
    assign: [
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rakib",
        image: avatar,
      },
      {
        name: "Rajib",
        image: avatar,
      },
      {
        name: "Rahad",
        image: avatar,
      },
    ],
    image: img1,
    category: "ui & ux",
    pages: "0/7",
    messageCount: "05",
    link: "02",
    date: "31 Jan,2024",
    time: "5:19pm",
    list: [
      {
        id: "item-1",
        title: "Collect Data",
      },
      {
        id: "item-2",
        title: "Collect Icons",
      },
      {
        id: "item-1",
        title: "Make Project Layout",
      },
    ],
  },
];

function generateSubTasks(numItems) {
  const data = [];

  for (let i = 1; i <= numItems; i++) {
    const numAssign = faker.number.int({ min: 1, max: 10 });
    const assignObjects = generateAssignments(numAssign);

    const currentYear = new Date().getFullYear();
    const assignDate = faker.date.past(
      `${currentYear}-01-01`,
      `${currentYear}-12-31`
    );
    const dueDate = faker.date.future(assignDate, `${currentYear}-12-31`);
    // faker.number.int({ min: 1000, max: 9999 })
    const newItem = {
      id: i,
      title: faker.hacker.ingverb(),
      status: faker.helpers.arrayElement(statuses).value,
      priority: faker.helpers.arrayElement(priorities).value,
      assign: assignObjects,
      assignDate: formatDate(assignDate),
      dueDate: formatDate(dueDate),
      completed: faker.datatype.boolean(),
      logo: null,
      taskId: 1,
    };
    data.push(newItem);
  }

  return data;
}

export const subTasks = generateSubTasks(6);
