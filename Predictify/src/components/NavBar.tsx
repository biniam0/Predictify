import { useNavigate } from "react-router-dom";

import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import {
  User,
  Menu,
  Moon,
  // Settings,
  Sun,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { setTheme } = useTheme();
  // loading, fetchUser, logout
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/signin"); // Redirect to home or login
  };

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[95%] backdrop-blur-[3px] bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-md rounded-b-xl px-4 mb-4">
      <div className="container mx-auto py-3 flex items-center justify-between gap-5">
        <Link to="/" className="text-xl font-bold ">
          Predictify
        </Link>

        <div className="flex-1 mx-6 max-w-md">
          <Input type="text" placeholder="" className="w-full border-hidden shadow-white"  />
        </div>

        <div className="space-x-3 hidden md:flex text-sm font-medium">
          <Link to="/news">News</Link>
          <Link to="/events">Events</Link>
          <Link to="/stories">Stories</Link>
          <Link to="/focuses">Focus</Link>
          <Link to="/researchers">Researchers</Link>
        </div>
        <div className="md:hidden pt-1.5">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Menu className="w-6 h-6 text-gray-700" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <Link to="/news">News</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/events">Events</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/stories">Stories</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/focuses">Focus</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/researchers">Researchers</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" style={{ borderRadius: 20 }}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <User className="flex justify-center self-center" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  {user && (
                    <div className="text-sm">
                      <p>{user ? user.name.split(" ")[0] : "Unknown"}</p>
                      <p>{user ? user.email : "unknown@gmail.com"}</p>{" "}
                    </div>
                  )}
                </DropdownMenuItem>
                <hr />
                <DropdownMenuItem>
                  <Link to="/profile">
                    <div className="flex items-center gap-2">
                      <User size={20} />
                      Profile
                    </div>
                  </Link>
                </DropdownMenuItem>
                {(user?.role === "admin" || user?.role === "researcher") && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin">
                      <div className="flex items-center gap-2">
                        <LayoutDashboard size={20} />
                        Dashboard
                      </div>
                    </Link>
                  </DropdownMenuItem>
                )}
                {/* <DropdownMenuItem>
                  <Link to="/">
                    <div className="flex items-center gap-2">
                      <Settings size={20} />
                      Settings
                    </div>
                  </Link>
                </DropdownMenuItem> */}
                <DropdownMenuItem className="">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
                  >
                    <LogOut size={20} />
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/signin">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
