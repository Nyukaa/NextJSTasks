import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const { name, message } = body;

  return NextResponse.json({
    success: true,
    received: {
      name,
      message,
    },
  });
}
