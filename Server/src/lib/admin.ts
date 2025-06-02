import { auth } from "./auth";
const adminClient = auth.plugins.admin

export async function createUser(data) {
  return await adminClient.createUser(data);
}

export async function listUsers(query) {
  return await adminClient.listUsers({ query });
}

export async function setUserRole(userId, role) {
  return await adminClient.setRole({ userId, role });
}

export async function banUser(userId, banReason, banExpiresIn) {
  return await adminClient.banUser({ userId, banReason, banExpiresIn });
}

// Add other admin methods as needed...

export default adminClient;
