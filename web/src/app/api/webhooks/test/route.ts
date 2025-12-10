export async function GET() {
  return Response.json({ result: "GET:OK" }, { status: 200 });
}

export async function POST() {
  return Response.json({ result: "POST:OK" }, { status: 200 });
}
