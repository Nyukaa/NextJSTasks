import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Anna",
    age: 25,
  });
}
