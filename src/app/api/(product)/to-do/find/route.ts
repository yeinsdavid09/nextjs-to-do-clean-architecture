import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const field = searchParams.get("field") ?? "";
  const value = searchParams.get("value") ?? "";

  const record = await prisma.toDo.findFirst({ where: { [field]: value } });
  if (!record) throw new Error("Record not found");

  return NextResponse.json(record, { status: 200 });
};
