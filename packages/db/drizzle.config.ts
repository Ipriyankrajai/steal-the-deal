import { defineConfig } from "drizzle-kit";
import { TURSO_AUTH_TOKEN, TURSO_CONNECTION_URL } from "./env.constant";

export default defineConfig({
  schema: "./src/schema/index.ts",
  out: "./drizzle",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: TURSO_CONNECTION_URL!,
    authToken: TURSO_AUTH_TOKEN!,
  },
});
