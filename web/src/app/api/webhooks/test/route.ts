export async function GET() {
  console.log("Testing GET Webhook...");
  return Response.json({ result: "GET:OK" }, { status: 200 });
}

export async function POST() {
  console.log("Testing POST Webhook...");
  return Response.json({ result: "POST:OK" }, { status: 200 });
}
