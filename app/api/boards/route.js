import { NextResponse } from "next/server";
import { demoBoards } from "./data";
import { revalidatePath } from "next/cache";

export async function GET(request, response) {
  return NextResponse.json(demoBoards, { status: 200 });
}

export async function POST(request, response) {
  const newItem = await request.json();
  newItem.id = demoBoards.length + 1;
  demoBoards.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}

export async function PATCH(request, response) {
  const payloadItem = await request.json();
  const { activeBoardId, overBoardId } = payloadItem;

  const activeIndex = demoBoards.findIndex(
    (item) => item.id === parseInt(activeBoardId)
  );
  const overIndex = demoBoards.findIndex(
    (item) => item.id === parseInt(overBoardId)
  );
  if (activeIndex !== -1 && overIndex !== -1) {
    // // swap boards
    [demoBoards[activeIndex], demoBoards[overIndex]] = [
      demoBoards[overIndex],
      demoBoards[activeIndex],
    ];

    return NextResponse.json(
      { message: "Item updated successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}
