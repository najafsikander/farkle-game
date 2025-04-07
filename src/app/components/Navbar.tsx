import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex flex-row justify-between w-full">
        <Link className="btn btn-ghost text-xl" href="/">Farkle Game</Link>
        <Link className="btn btn-ghost text-lg" href="/score">Score</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
