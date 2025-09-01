import { Link2 } from "lucide-react";

export default function Link({ children }) {
  return (
    <>
      <div className="hover:text-white hover:border hover:border-b-white transition-all duration-300 flex items-center gap-2 cursor-pointer">
        <Link2 />
      </div>
    </>
  );
}
