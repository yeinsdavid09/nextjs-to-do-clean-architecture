import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const GET = async (request: Request) => {
  await prisma.toDo.deleteMany();
  await prisma.rol.deleteMany();
  await prisma.user.deleteMany();

  const roles = await prisma.rol.createMany({
    data: [
      { id: "5609959f-01bf-4de4-a028-a8a31fbf846e", name: "superadmin" },
      { id: "85dffe98-8889-4f4c-a6dd-bdde6493920c", name: "admin" },
      { id: "14d9d1a0-a9cb-43e2-b7a7-a11041c5811b", name: "user" },
    ],
  });

  const users = await prisma.user.createMany({
    data: [
      {
        id: "39321ac1-9b76-4618-a4f8-c3cd63783d44",
        name: "Super Admin",
        email: "admin@gmail.com",
        password:
          "$2b$10$PINTZXLhatDE9wV0xNSxtOdvvvjtCwGc2/BySPUr7ZaY3YoKeTLxi",
      },
    ],
  });

  const permissions = await prisma.permission.createMany({
    data: [
      {
        userId: "39321ac1-9b76-4618-a4f8-c3cd63783d44",
        roleId: "5609959f-01bf-4de4-a028-a8a31fbf846e",
      },
    ],
  });

  const toDos = await prisma.toDo.createMany({
    data: [
      {
        title: "Lorem Ipsum Dolor",
        description:
          "Laborum in dolor ut mollit ex mollit cillum ullamco esse.",
        status: "BACKLOG",
        userId: "39321ac1-9b76-4618-a4f8-c3cd63783d44",
      },
    ],
  });

  return NextResponse.json({
    message: "Seeder successfully executed",
  });
};
