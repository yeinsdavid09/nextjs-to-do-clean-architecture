import { NextResponse } from "next/server";

export const GET = (request: Request) => {
  return NextResponse.json({
    message: "The API works fine!",
  });
};
