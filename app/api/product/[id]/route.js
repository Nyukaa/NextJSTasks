import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;

  return NextResponse.json({
    id: id,
    name: `Product ${id}`,
    price: 100,
    description: `Description for product ${id}`,
  });
}
