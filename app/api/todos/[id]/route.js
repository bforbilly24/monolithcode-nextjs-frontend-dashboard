import { NextResponse } from "next/server";
import { demoData } from "../data";

function delayResponse(responseObj, delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(responseObj);
    }, delay);
  });
}

export async function GET(request, response) {
  const id = response.params.id;
  console.log(id, "ami form single");
  // Find the item with the given ID
  const item = demoData.find((item) => item.id === parseInt(id));

  if (item) {
    return NextResponse.json(item, { status: 200 });
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}

export async function PUT(request, response) {
  const payloadItem = await request.json();

  const index = demoData.findIndex(
    (item) => item.id === parseInt(payloadItem.id)
  );
  console.log(payloadItem, "ami api theke");
  if (index !== -1) {
    // Update the item in the array
    demoData[index] = payloadItem;

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

  const index = demoData.findIndex((item) => item.id === parseInt(id));

  if (index !== -1) {
    // Remove the item from the array
    demoData.splice(index, 1);
    return NextResponse.json(
      { message: "Item deleted successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}
