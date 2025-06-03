// src/lib/auth-clients.ts
import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient({
  baseURL: "http://localhost:3000/api/auth", // Make sure this matches your backend
});

export default authClient;
