import { useAuth } from "../hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Skeleton } from "../components/ui/skeleton";

export default function UserProfile() {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) {
    return (
      <div className="p-6">
        <Skeleton className="h-8 w-48 mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <div className="p-6 text-red-500">User not logged in.</div>;
  }

  return (
    <Card className="max-w-xl mx-auto my-12 p-4">
      <CardHeader>
        <CardTitle className="text-xl">User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <img
            src={user.image || "https://via.placeholder.com/80"}
            alt="User"
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.name || "No name"}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-400">Role: {user.role || "user"}</p>
          </div>
        </div>

        <div className="grid gap-2 text-sm">
          {Object.entries(user).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b py-1">
              <span className="font-medium capitalize">{key}</span>
              <span className="text-right break-all">
                {typeof value === "object" ? JSON.stringify(value) : String(value)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
