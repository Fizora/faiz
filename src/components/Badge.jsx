export default function Badge({ children }) {
  return (
    <>
      <div className="from-zinc-900 via-amber-600/50 to-zinc-900 bg-gradient-to-br px-4 py-1 text-white border border-amber-800 rounded-full">
        {children}
      </div>
    </>
  );
}
