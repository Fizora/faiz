import Development from "@/components/Development";
import Sidebar from "@/components/Sidebar";

export default function Blog() {
  return (
    <>
      <div className="min-h-screen  flex items-center justify-between mx-auto max-w-4xl">
        <Sidebar />
        <div className="overflow-y-auto min-h-screen items-center justify-center flex text-center">
          <Development />
        </div>
      </div>
    </>
  );
}
