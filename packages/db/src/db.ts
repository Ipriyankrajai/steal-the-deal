import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { DATABASE_URL } from "./env.constant";

const sql = neon(DATABASE_URL);
export const db = drizzle(sql);
