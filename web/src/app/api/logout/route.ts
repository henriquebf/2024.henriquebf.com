import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export async function GET() {
  const session = await getSession();
  // Destroy session and return to Index page
  session.destroy();
  Response.redirect("/admin");
}
