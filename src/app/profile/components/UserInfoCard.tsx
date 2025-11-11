'use client';
import type { User } from "@clerk/nextjs/server";
import { FC } from "react";
import { useSearchParams } from "next/navigation";
import { UserPlusIcon } from "@heroicons/react/24/outline";

type Props = {
    stringifiedUser:string
};
const UserInfoCard:FC<Props> = ({stringifiedUser}) => {
    const user:User = JSON.parse(stringifiedUser);
    const userId:string|null = useSearchParams().get("userId");
    const isCurrentUser:boolean |null = (userId != null && (userId !== user.id));
    return(
        <>
        <main className="w-full flex flex-col gap-2 mt-[11vh] p-3 bg-white rounded-2xl text-slate-600">
            <div className="flex justify-center">
                <h1 className="text-center text-2xl font-bold">{user.firstName} {user.lastName}</h1>
                {isCurrentUser && <button className="ml-2 bg-slate-800 text-white rounded-[50%] p-2 cursor-pointer"><UserPlusIcon className="w-5 h-5 text-white" /></button>}
            </div>
            <h2 className="text-center text-lg">@{user.username}</h2>
            <h3 className="text-center text-md">{user.emailAddresses[0]?.emailAddress}</h3>
            <h3 className="text-center text-md">Created: {new Date(user.createdAt).toLocaleDateString()}</h3>
            <h3 className="text-center text-md">Last Sign In: {new Date(user.lastSignInAt || "").toLocaleDateString()}</h3>
        </main>
        </>
    );
}

export default UserInfoCard;