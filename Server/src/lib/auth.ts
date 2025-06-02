import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins";

import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "../models/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ["http://localhost:5173"],
  plugins: [admin()],
});

