// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
// see: https://github.com/vvo/iron-session
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

const sessionOptions = {
  password: process.env.SESSION_SECRET || "",
  cookieName: "gearalert",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

if (!process.env.SESSION_SECRET) {
  throw new Error("session: SESSION_SECRET not provided!");
}

export interface Session {
  athleteId?: string;
}

export function getSession() {
  return getIronSession(cookies(), sessionOptions);
}
