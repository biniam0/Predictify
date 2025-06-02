import { Outlet, NavLink } from "react-router-dom";
import { Card } from "./ui/card";
import { useAuth } from "../hooks/useAuth";

export default function AdminLayout() {
  const { user } = useAuth();

  const navItems = [
    { to: "/admin/researchers", label: "Researchers", roles: ["admin"] },
    { to: "/admin/focuses", label: "Focuses", roles: ["admin"] },
    { to: "/admin/events", label: "Events", roles: ["admin"] },
    { to: "/admin/news", label: "News", roles: ["researcher"] },
    { to: "/admin/stories", label: "Stories", roles: ["researcher"] },
  ];

  return (
    <Card className="grid grid-cols-1 md:grid-cols-[250px_1fr] m-28 mb-0">
      <aside className="dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 px-4 py-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
          Dashboard
        </h2>

        <nav className="space-y-3">
          {user && user.role &&
            navItems
              .filter((item) => item.roles.includes(user.role as string))
              .map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-black text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
        </nav>
        <hr />
      </aside>

      {/* Main content */}
      <main className="overflow-y-auto">
        <Outlet />
      </main>
    </Card>
  );
}
