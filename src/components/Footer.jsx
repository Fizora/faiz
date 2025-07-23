import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="mt-2">
        <Link
          href="https://github.com/yourusername"
          className="text-blue-400 mx-2"
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
          className="text-blue-400 mx-2"
        >
          LinkedIn
        </Link>
        <p>© {new Date().getFullYear()} Choirul Faiz. All rights reserved.</p>
      </div>
    </footer>
  );
}
