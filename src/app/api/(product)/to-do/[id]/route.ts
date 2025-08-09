import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

//* Dtos
import { UpdateToDoDto } from "../dtos/update.dto";

export const GET = async (
  request: Request,
  context: { params: { id: string } }
) => {
  const { id } = context.params;
  const record = await prisma.toDo.findFirst({ where: { id } });

  if (!record) {
    return NextResponse.json({ message: "Record not found" }, { status: 404 });
  }

  return NextResponse.json(record);
};

export const PATCH = async (
  request: Request,
  context: { params: { id: string } }
) => {
  const { id } = context.params;
  const recordExist = await prisma.toDo.findFirst({ where: { id } });
  const body = await UpdateToDoDto.validate(await request.json());

  if (!recordExist) {
    return NextResponse.json({ message: "Record not found" }, { status: 404 });
  }

  const record = await prisma.toDo.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(record);
};

export const DELETE = async (
  request: Request,
  context: { params: { id: string } }
) => {
  const { id } = context.params;
  const recordExist = await prisma.toDo.findFirst({ where: { id } });

  if (!recordExist) {
    return NextResponse.json({ message: "Record not found" }, { status: 404 });
  }

  const record = await prisma.toDo.delete({ where: { id } });
  return NextResponse.json({ record, message: "Record deleted succesfully" });
};
