export default function Badge({ children }) {
  return (
    <>
      <div className="from-zinc-900 via-amber-600/50 to-zinc-900 bg-gradient-to-br px-4 py-1 text-white  rounded-full">
        {children}
      </div>
    </>
  );
}
