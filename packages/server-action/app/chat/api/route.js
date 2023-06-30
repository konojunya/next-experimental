import { NextResponse } from "next/server";
import { setTimeout } from "timers/promises";

const messages = [];

export async function POST(req) {
  await setTimeout(500);

  const body = await req.json();

  messages.push(body.message);

  return NextResponse.json({
    messages,
  });
}
