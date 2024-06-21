import { NextResponse } from "next/server";
import { subTasks } from "../../data";

export async function PUT(request, response) {
  const payloadItem = await request.json();

  const index = subTasks.findIndex(
    (item) => item.id === parseInt(payloadItem.id)
  );
  console.log(payloadItem, "ami api theke");
  if (index !== -1) {
    // Update the item in the array
    subTasks[index] = payloadItem;
    //tasks[index] = { ...tasks[index], ...payloadItem };

    return NextResponse.json(
      { message: "Item updated successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}

export async function DELETE(request, response) {
  const id = response.params.id;

  const index = subTasks.findIndex((item) => item.id === parseInt(id));

  if (index !== -1) {
    // Remove the item from the array
    subTasks.splice(index, 1);
    return NextResponse.json(
      { message: "Item deleted successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}
