"use client";
import FuzzyText from "./ui/FuzzyText";

export default function Development() {
  return (
    <>
      <div className="">
        <p className="px-4 ">
          <FuzzyText>404 Not Found.</FuzzyText>
        </p>
         {/* Info tambahan */}
          <p className="text-zinc-500">
            This page is currently under development. Stay tuned for updates! 🚧
          </p>
      </div>
    </>
  );
}
