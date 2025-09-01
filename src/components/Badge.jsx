export default function Badge({ children }) {
  return (
    <>
      <div className="bg-purple-600/20 border border-purple-600 px-4 py-1 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 rounded-full">
        {children}
      </div>
    </>
  );
}
