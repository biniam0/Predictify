export default function Footer() {
  return (
    <footer className="border-t py-6 mt-12 bg-white text-gray-600 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Predictify. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/about" className="hover:text-blue-600">
            About
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
          <a href="/privacy" className="hover:text-blue-600">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
