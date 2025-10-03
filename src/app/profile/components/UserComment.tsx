import { FC } from "react";
import type { User } from "@clerk/nextjs/server";
import Image from "next/image";
import UserReply from "./UserReply";

type Props = {
  user: User;
};

const UserCommnet: FC<Props> = ({ user }) => {
  const loremImpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  const getDate = (date: number): string => {
    return new Date(date).toDateString();
  };
  return (
    <>
      <section className="w-full mt-4 p-3 bg-white rounded-lg">
        <div className="flex gap-3">
          <Image
            src={user.imageUrl}
            alt={`${user.firstName} ${user.lastName}`}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h4 className="text-lg font-semibold text-slate-800">
              {user.fullName}
            </h4>
            <h6 className="text-slate-600">{getDate(user.createdAt)}</h6>
          </div>
        </div>
        <p className="mt-2 text-slate-800">{loremImpsumText}</p>
        <div className="w-full flex justify-around mt-4 border-t border-b pb-2 pt-2 text-slate-600 mb-2">
          <h3 className="cursor-pointer hover:text-slate-500">Like</h3>
          <h3 className="cursor-pointer hover:text-slate-500">Comment</h3>
          <h3 className="cursor-pointer hover:text-slate-500">Share</h3>
        </div>

        <UserReply user={user} />
      </section>
    </>
  );
};
export default UserCommnet;
