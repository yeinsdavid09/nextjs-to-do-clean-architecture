import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

//* Dtos
import { CreateToDoDto } from "./dtos/create.dto";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const skip = Number(searchParams.get("skip") ?? "0");
  const take = Number(searchParams.get("take") ?? "10");

  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Skip param must be a number" },
      { status: 400 }
    );
  }

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Take param must be a number" },
      { status: 400 }
    );
  }

  const [data, total] = await prisma.$transaction([
    prisma.toDo.findMany({ take, skip }),
    prisma.toDo.count(),
  ]);

  return NextResponse.json({
    data,
    total,
  });
};

export const POST = async (request: Request) => {
  const body = await CreateToDoDto.validate(await request.json());

  if (!body) {
    return NextResponse.json({ message: "Body is required" }, { status: 400 });
  }

  const record = await prisma.toDo.create({ data: body });
  return NextResponse.json(record);
};
