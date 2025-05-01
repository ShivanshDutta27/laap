
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 mt-auto">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="bg-primary rounded-md p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-white"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <span className="text-lg font-bold">Agile Learn</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-4 md:mb-0">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
        </div>
        
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Agile Learn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
