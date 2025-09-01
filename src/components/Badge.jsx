export default function Badge({ children }) {
  return (
    <>
      <div className="from-purple-600/20 via-purple-300/50 to-purple-600/20 bg-gradient-to-br px-4 py-1 text-white  rounded-full">
        {children}
      </div>
    </>
  );
}
