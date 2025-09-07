export default function Subtitle({ children }) {
  return (
    <>
      <h2 className="font-bold text-white flex items-center gap-2 text-xl">
        <span class="relative flex size-3">
          {" "}
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>{" "}
          <span class="relative inline-flex size-3 rounded-full bg-amber-500"></span>
        </span>
        {children}
      </h2>
    </>
  );
}
