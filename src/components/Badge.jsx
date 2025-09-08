export default function Badge({ children }) {
  return (
    <>
      <div className=" bg-zinc-800 px-4 py-1 text-white border border-zinc-700 rounded-full w-max">
        {children}
      </div>
    </>
  );
}
