import type { User } from "@clerk/nextjs/server";
import { FC } from "react";
import Image from "next/image";

type Props = {
  user: User;
};
const SideProfile: FC<Props> = ({ user }) => {

  const friend: { fullName: string; imageUrl: string; } = {
    fullName: "John Doe",
    imageUrl: "https://avatar.iran.liara.run/public",
  }
  return (
    <aside className="basis-1/3 w-full bg-slate-600">
        <div className="w-full rounded-md relative">
        <Image src={user.imageUrl} alt={user.firstName || "User Avatar"} width={100} height={100} className="w-full h-[30vh]  rounded-xl"/>
        <div className="flex justify-center w-full absolute top-[29%]">
        <Image src={user.imageUrl} alt={user.firstName || "User Avatar"} width={100} height={100} className="rounded-[50%]"/>
        </div>
        <main className="w-full flex flex-col gap-2 mt-[9vh] p-3 bg-white rounded-2xl text-slate-600">
            <h1 className="text-center text-2xl font-bold">{user.firstName} {user.lastName}</h1>
            <h2 className="text-center text-lg">@{user.username}</h2>
            <h3 className="text-center text-md">{user.emailAddresses[0]?.emailAddress}</h3>
            <h3 className="text-center text-md">Created: {new Date(user.createdAt).toLocaleDateString()}</h3>
            <h3 className="text-center text-md">Last Sign In: {new Date(user.lastSignInAt || "").toLocaleDateString()}</h3>
        </main>


        <main className="w-full gap-2 mt-10 p-3 bg-white rounded-2xl text-slate-600">
            <h1 className="text-center text-2xl font-bold">Friends List</h1>
            <div className="grid grid-cols-4 gap-2">
                {
                    Array.from({length: 8}, () => friend).map((item, index) => (
                        <Image title={item.fullName} key={index} src={item.imageUrl} alt={item.fullName} width={50} height={50} loading="lazy" className="w-[71%] h-auto rounded-[50%]" />
                    ))
                }
            </div>
        </main>

        </div>
    </aside>
  );
};

export default SideProfile;
