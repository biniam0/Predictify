import { createAuthClient } from "better-auth/client";
import { adminClient } from "better-auth/client/plugins";
import type { auth } from "./src/lib/auth.ts";
import { inferAdditionalFields } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [inferAdditionalFields<typeof auth>(), adminClient()],
});
