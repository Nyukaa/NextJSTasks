import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    name: "Anna",
    age: 25,
  },
  {
    id: 2,
    name: "John",
    age: 30,
  },
];

export async function GET(req, { params }) {
  const { id } = await params;

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(user);
}
