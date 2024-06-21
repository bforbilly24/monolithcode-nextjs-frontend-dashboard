import { NextResponse } from "next/server";
import { projects } from "./data";

export async function GET(request, response) {
  return NextResponse.json(projects, { status: 200 });
}

export async function POST(request, response) {
  const newItem = await request.json();

  // Assign a new ID to the item (assuming there's no unique ID generation yet)
  newItem.id = projects.length + 1;

  // Add the new item to the array
  projects.push(newItem);
  console.log(newItem, "ami new item");

  return NextResponse.json(newItem, { status: 201 });
}
