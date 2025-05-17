'use client';
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";

//TODO: Add User Search Option
const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex flex-row justify-between w-full">
        <Link className="btn btn-ghost text-xl" href="/">Farkle Game</Link>
        <div className="flex flex-row gap-1">
        <div className="flex flex-col justify-center">
        <SignedIn>
          <UserButton>
            <UserButton.MenuItems>
            <UserButton.Link
            label="Profile"
            labelIcon={<UserIcon className="w-5 h-5" />}
            href="/profile"/>
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
        </div>
        <Link className="btn btn-ghost text-lg" href="/score">Score</Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
