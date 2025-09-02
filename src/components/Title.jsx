export default function Title({ children }) {
  return (
    <>
      <h1 className="text-white text-3xl md:text-5xl" data-aos="zoom-in-up">
        {children}
      </h1>
    </>
  );
}
