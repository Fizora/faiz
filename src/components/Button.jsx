export default function Button({ children }) {
  return (
    <>
      <div
        className="px-5 py-1.5 rounded-sm bg-zinc-900 w-max border border-zinc-700 hover:text-white cursor-pointer"
        data-aos="zoom-in-up"
      >
        {children}
      </div>
    </>
  );
}
