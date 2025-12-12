import { NextRequest } from "next/server";

export async function GET() {
  console.log("Testing GET Webhook...");
  return Response.json({ result: "GET:OK" }, { status: 200 });
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<unknown> }
) {
  console.log("Testing POST Webhook...");
  const params = await context.params;
  return Response.json({ result: "POST:OK", params }, { status: 200 });
}
