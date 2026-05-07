import { NextResponse } from "next/server";

let users = [
  {
    id: 1,
    name: "Anna",
    age: 25,
  },
  {
    id: 2,
    name: "Alex",
    age: 30,
  },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req) {
  const body = await req.json();

  const { name, age } = body;

  if (!name || !age) {
    return NextResponse.json(
      {
        error: "Name and age are required",
      },
      {
        status: 400,
      }
    );
  }

  const newUser = {
    id: users.length + 1,
    name,
    age,
  };

  users.push(newUser);

  return NextResponse.json(newUser, {
    status: 201,
  });
}
