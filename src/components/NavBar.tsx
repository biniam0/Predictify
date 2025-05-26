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

export default function Navbar() {
  const { setTheme } = useTheme();
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm gap-3">
      <div className="text-xl font-bold text-black">Predictify</div>

      <div className="flex-1 mx-6 max-w-md">
        <Input type="text" placeholder="Search..." className="w-full" />
      </div>

      <div className="space-x-3 hidden md:flex text-sm font-medium text-gray-700">
        <a href="#about" className="hover:text-blue-600">
          Researchers
        </a>
        <a href="#news" className="hover:text-blue-600">
          News
        </a>
        <a href="#events" className="hover:text-blue-600">
          Events
        </a>
        <a href="#focus" className="hover:text-blue-600">
          Focus
        </a>
        <a href="#stories" className="hover:text-blue-600">
          Stories
        </a>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Menu className="w-6 h-6 text-gray-700" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <a href="#about" className="w-full">
                About Researchers
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#news" className="w-full">
                News
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#events" className="w-full">
                Events
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#focus" className="w-full">
                Thematic Focus
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#stories" className="w-full">
                Stories
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon">
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
    </nav>
  );
}
