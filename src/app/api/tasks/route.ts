import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const prisma = new PrismaClient();
  try {
    const tasks = await prisma.task.findMany();
    console.log(tasks);
    return NextResponse.json(tasks);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
