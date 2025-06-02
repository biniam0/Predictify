// auth-clients.ts
import { createAuthClient } from "better-auth/react";
const authClient = createAuthClient({
  baseURL: "http://localhost:5000/api/auth",
});

export default authClient;
