import { type NextRequest } from "next/server";
import { getSession } from "@/lib/session";

export async function GET(req: NextRequest) {
  const session = await getSession();
  // Destroy session and return to Index page
  session.destroy();
  return Response.redirect(new URL("/admin", req.url));
}
