import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  const name = url.searchParams.get("name");
  const age = url.searchParams.get("age");
  const gender = url.searchParams.get("gender");

  return NextResponse.json({
    message: `Hello ${name} age = ${age} my gender is ${gender}`,
  });
}

