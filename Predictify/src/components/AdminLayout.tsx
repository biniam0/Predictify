import { Outlet, NavLink } from "react-router-dom";
import { Card } from "./ui/card";

export default function AdminLayout() {
  return (
    <Card className="grid grid-cols-1 md:grid-cols-[250px_1fr] m-28 mb-0">
      <aside className=" dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 px-4 py-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
          Dashboard
        </h2>

        <nav className="space-y-3">
          {[
            { to: "/admin/researchers", label: "Researchers" },
            { to: "/admin/news", label: "News" },
            { to: "/admin/events", label: "Events" },
            { to: "/admin/focuses", label: "Focuses" },
            { to: "/admin/stories", label: "Stories" },
          ].map(({ to, label }) => (
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
      <main className=" overflow-y-auto">
        <Outlet />
      </main>
    </Card>
  );
}
