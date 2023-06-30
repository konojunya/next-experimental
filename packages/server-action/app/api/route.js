import { NextResponse } from "next/server";
import { setTimeout } from "timers/promises";

export async function POST() {
  await setTimeout(2000);

  return NextResponse.json({
    message: "Hello App Router in route.js",
    now: Date.now(),
  });
}
