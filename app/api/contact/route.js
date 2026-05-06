import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const { name, message } = body;
  // Simple authentication check
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!name || !message) {
    return NextResponse.json(
      {
        error: "Name and message are required",
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "Contact form submitted successfully",
      data: {
        name,
        message,
      },
    },
    { status: 201 }
  );
}
