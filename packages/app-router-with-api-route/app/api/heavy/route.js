import { NextResponse } from "next/server";
import { setTimeout } from "timers/promises";

export async function GET(req) {
  const wait = Math.floor(Math.random() * 10);
  await setTimeout(wait * 1000);

  return NextResponse.json(wait);
}
