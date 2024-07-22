import type { Config } from "tailwindcss";
import sharedConfig from "@steal-the-deal/ui/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["src/**/*.{ts,tsx}", "../../packages/ui/**/*.{ts,tsx}",],
  presets: [sharedConfig],
};

export default config;

