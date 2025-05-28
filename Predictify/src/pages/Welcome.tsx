import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="h-[100vh] flex flex-col justify-between px-4">
      <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-black-100 to-white">
        <h1 className="text-5xl font-bold mb-4 text-white-900">
          Welcome to Predictify
        </h1>
        <p className="text-lg text-white-600 max-w-xl">
          Dive into cutting-edge research, news, events, and stories that shape
          the future of AI and education.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <Link to="/researchers">
            <Button variant="default">Explore Researchers</Button>
          </Link>
          <Link to="/news">
            <Button variant="outline">Latest News</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
