import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma";
import { auth } from "../../../../auth";

export async function POST(request: any) {
  const session = await auth();
  const res = await request.json();
  const { content } = res;
  console.log({ res });

  const data = {
    data: {
      content,
      // send date/time as UTC to db to display correctly on client with .toLocaleString()
      date: new Date(`${new Date()} UTC`),
      authorId: session?.user?.id ? String(session.user.id) : "",
    },
  };

  const result = await prisma.post.create(data);

  return NextResponse.json({ result });
}
