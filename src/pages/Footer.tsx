import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t-2 b-0 py-4 mt-6 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4">
        <p>
          &copy; {new Date().getFullYear()} Predictify. All rights reserved.
        </p>
        <div className="flex gap-6 md:mt-0">
          <Link to="/">About</Link>
          <Link to="/">Contacts</Link>
          <Link to="/">
            <ChevronUp />
          </Link>
        </div>
      </div>
    </footer>
  );
}
