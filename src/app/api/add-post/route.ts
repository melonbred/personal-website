import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma";
import { auth } from "../../../../auth";
import { revalidatePath } from "next/cache";

export async function POST(request: any) {
  const session = await auth();
  const res = await request.json();
  const { content } = res;
  console.log({ res });

  const result = await prisma.post.create({
    data: {
      content,
      date: new Date(),
      authorId: session?.user?.id,
    },
  });

  return NextResponse.json({ result });
  revalidatePath("/");
}
