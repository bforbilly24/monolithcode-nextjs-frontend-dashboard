import { NextResponse } from "next/server";
import { tasks } from "./data";

export async function GET(request, response) {
  //const delayedResponse = await delayResponse(demoData, 2000);
  return NextResponse.json(tasks, { status: 200 });
}

export async function POST(request, response) {
  const newItem = await request.json();
  newItem.id = tasks.length + 1;
  tasks.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}
