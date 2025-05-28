import { Input } from "./ui/input";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { setTheme } = useTheme();
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[95%] backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 shadow-md rounded-b-xl px-4 mb-4">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-5">
        <Link to="/" className="text-xl font-bold ">
          Predictify
        </Link>

        <div className="flex-1 mx-6 max-w-md">
          <Input type="text" placeholder="Search..." className="w-full" />
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" style={{borderRadius: 20}}>
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
      </div>
    </nav>
  );
}
