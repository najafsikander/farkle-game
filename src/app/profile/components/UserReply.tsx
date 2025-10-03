import type { User } from "@clerk/nextjs/server";
import { FC } from "react";
import Image from "next/image";

type Props = {
    user: User;
}

const UserReply: FC<Props> = ({ user }) => {
    return(
        <>
        <div className="flex gap-3 bg-slate-200 p-2 rounded">
          <div>
            <Image
              src={user.imageUrl}
              alt={`${user.firstName} ${user.lastName}`}
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <h4 className="text-lg font-semibold text-slate-800">
              {user.fullName}
            </h4>
            <p className="text-slate-800">
              Hello world! Hello world! Hello world! Hello world! Hello world!
              Hello world! Hello world! Hello world!
            </p>
            <div className="w-1/3 flex justify-start mt-1 pb-2 pt-2 text-slate-600 mb-1">
              <h3 className="cursor-pointer hover:text-slate-500 mr-2">Like</h3>
              <h3 className="cursor-pointer hover:text-slate-500">Reply</h3>
            </div>
          </div>
        </div>
        </>
    )
}

export default UserReply;