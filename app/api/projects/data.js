import avatar1 from "@/public/images/avatar/avatar-1.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";
import avatar3 from "@/public/images/avatar/avatar-3.jpg";
import avatar4 from "@/public/images/avatar/avatar-4.jpg";
import avatar5 from "@/public/images/avatar/avatar-5.jpg";
import avatar6 from "@/public/images/avatar/avatar-6.jpg";
import avatar7 from "@/public/images/avatar/avatar-7.jpg";
import avatar8 from "@/public/images/avatar/avatar-8.jpg";
import avatar9 from "@/public/images/avatar/avatar-9.jpg";
import avatar10 from "@/public/images/avatar/avatar-10.jpg";
import avatar11 from "@/public/images/avatar/avatar-11.jpg";
import avatar12 from "@/public/images/avatar/avatar-12.jpg";
import avatar13 from "@/public/images/avatar/avatar-13.jpg";

import ass from "@/public/images/projects/ass.jpg";
import productify from "@/public/images/projects/productify.jpg";
import uradvisor from "@/public/images/projects/uradvisor.jpg";
import konst from "@/public/images/projects/konst.jpg";
import { faker } from "@faker-js/faker";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Timer,
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import { format } from "date-fns";
export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: HelpCircle,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CheckCircle2,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: XCircle,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ChevronDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ChevronRight,
  },
  {
    label: "High",
    value: "high",
    icon: ChevronUp,
  },
];

function getRandomDate(startDate, endDate) {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const randomTime = start + Math.random() * (end - start);
  return new Date(randomTime);
}

export function generateAssignments(numAssign) {
  const assignObjects = [];

  for (let j = 0; j < numAssign; j++) {
    assignObjects.push({
      image: faker.image.avatarLegacy(),
      label: faker.person.firstName(),
      value: faker.internet.userName(),
    });
  }

  return assignObjects;
}

// function generateFakeData(numItems) {
//   const data = [];

//   for (let i = 1; i <= numItems; i++) {
//     const numAssign = faker.number.int({ min: 1, max: 10 });
//     const assignObjects = generateAssignments(numAssign);

//     const currentYear = new Date().getFullYear();
//     const assignDate = faker.date.past(
//       `${currentYear}-01-01`,
//       `${currentYear}-12-31`
//     );
//     const dueDate = faker.date.future(assignDate, `${currentYear}-12-31`);
//     // faker.number.int({ min: 1000, max: 9999 })
//     const newItem = {
//       id: i,
//       title: faker.hacker.ingverb(),
//       subtitle: faker.lorem.sentence(4),
//       status: faker.helpers.arrayElement(statuses).value,
//       label: faker.helpers.arrayElement(labels).value,
//       priority: faker.helpers.arrayElement(priorities).value,
//       description: faker.lorem.paragraph({ min: 1, max: 2 }),
//       percentage: faker.number.int({ min: 10, max: 100 }),
//       assign: assignObjects,
//       assignDate: formatDate(assignDate),
//       dueDate: formatDate(dueDate),
//       logo: faker.image.avatarLegacy(),
//       isFavourite: faker.datatype.boolean(),
//     };
//     data.push(newItem);
//   }

//   return data;
// }

// export const projects = generateFakeData(6);

const currentYear = new Date().getFullYear();
const assignDate = faker.date.past(
  `${currentYear}-01-01`,
  `${currentYear}-12-31`
);
const dueDate = faker.date.future(assignDate, `${currentYear}-12-31`);
export const projects = [
  {
    id: 1,
    title: "Acculance – A POS Application.",
    subtitle:
      "Acculance stands out as a web application crafted for point of sale, inventory management, & etc.",
    status: "in progress",
    label: "bug",
    priority: "low",
    description:
      "Acculance stands out as a web application crafted for point of sale, inventory management, & etc.",
    percentage: 32,
    assign: [
      { image: avatar1, label: "John Doe", value: "john.doe" },
      { image: avatar2, label: "Jane Smith", value: "jane.smith" },
      { image: avatar3, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar4, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: "24 June 2023",
    dueDate: "02 March 2024",

    isFavorite: true,
  },

  {
    id: 2,
    title: "Productify - Production System.",
    subtitle:
      "Productify is a secure, and high-speed production management system constructed by Laravel.",
    status: "review",
    label: "bug",
    priority: "medium",
    description:
      "Productify is a secure, and high-speed production management system constructed by Laravel.",
    percentage: 90,
    assign: [
      { image: avatar5, label: "John Doe", value: "john.doe" },
      { image: avatar6, label: "Jane Smith", value: "jane.smith" },
      { image: avatar7, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar8, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: "02 Feb 2023",
    dueDate: "02 Apr 2023",
    logo: productify,
    isFavorite: false,
  },
  {
    id: 3,
    title: "UR-Advisor - Online Advisor Tool.",
    subtitle:
      "UR-Advisor stands as a lightweight quiz/survey web application built on PHP.",
    status: "in progress",
    label: "bug",
    priority: "low",
    description:
      "UR-Advisor stands as a lightweight quiz/survey web application built on PHP.",
    percentage: 61,
    assign: [
      { image: avatar9, label: "John Doe", value: "john.doe" },
      { image: avatar10, label: "Jane Smith", value: "jane.smith" },
    ],
    assignDate: "12 Nov 2023",
    dueDate: "31 May 2024",
    logo: uradvisor,
    isFavorite: false,
  },
  {
    id: 4,
    title: "Konst - Construction Website.",
    subtitle:
      "Konst professional, clean, creative, corporate, modern, and easy-to-use xd template designed.",
    status: "completed",
    label: "bug",
    priority: "high",
    description:
      "Konst professional, clean, creative, corporate, modern, and easy-to-use xd template designed.",
    percentage: 100,
    assign: [
      { image: avatar11, label: "John Doe", value: "john.doe" },
      { image: avatar12, label: "Jane Smith", value: "jane.smith" },
      { image: avatar13, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar1, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: "09 Dec 2022",
    dueDate: "14 Jan 2024",
    logo: konst,
    isFavorite: false,
  },
  {
    id: 5,
    title: "DashCode - Admin Dashboard.",
    subtitle:
      "DashCode stands out as the fastest and extensive customizable admin dashboard template.",
    status: "review",
    label: "bug",
    priority: "medium",
    description:
      "DashCode stands out as the fastest and extensive customizable admin dashboard template.",
    percentage: 84,
    assign: [
      { image: avatar2, label: "John Doe", value: "john.doe" },
      { image: avatar3, label: "Jane Smith", value: "jane.smith" },
      { image: avatar4, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar5, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: "19 Oct 2023",
    dueDate: "02 Feb 2024",

    isFavorite: false,
  },
  {
    id: 6,
    title: "Acculance SaaS - POS System.",
    subtitle:
      "Create a Brand logo design for a DashTail Admin. Total 21/25 tasks logo design for completed.",
    status: "completed",
    label: "bug",
    priority: "high",
    description:
      "Create a Brand logo design for a DashTail Admin. Total 21/25 tasks logo design for completed.",
    percentage: 100,
    assign: [
      { image: avatar6, label: "John Doe", value: "john.doe" },
      { image: avatar7, label: "Jane Smith", value: "jane.smith" },
      { image: avatar8, label: "Bob Johnson", value: "bob.johnson" },
      { image: avatar9, label: "Alice Lee", value: "alice.lee" },
    ],
    assignDate: "26 Aug 2023",
    dueDate: "31 Jan 2024",
    logo: ass,
    isFavorite: false,
  },
];
