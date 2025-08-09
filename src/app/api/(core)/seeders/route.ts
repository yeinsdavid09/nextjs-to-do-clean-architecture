import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (request: Request) => {
  await prisma.toDo.deleteMany();
  const records = await prisma.toDo.createMany({
    data: [
      { description: "Piedra del alma", completed: true },
      { description: "Piedra del poder", completed: true },
      { description: "Piedra del tiempo" },
      { description: "Piedra del espacio" },
      { description: "Piedra del realidad" },
    ],
  });

  return NextResponse.json({
    message: "Seeder successfully executed",
    data: records,
  });
};
