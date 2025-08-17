"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/(core)/auth/[...nextauth]/route";

export const getServerSessionAction = async () => {
  const session = await getServerSession(authOptions);
  // console.log("Session => ", JSON.stringify(session?.user?.permissions));
  return session;
};
