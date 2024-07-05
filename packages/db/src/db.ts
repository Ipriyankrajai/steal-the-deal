import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { TURSO_AUTH_TOKEN, TURSO_CONNECTION_URL } from "../env.constant";

export const turso = createClient({
  url: TURSO_CONNECTION_URL!,
  authToken: TURSO_AUTH_TOKEN!,
});

export const db = drizzle(turso);
