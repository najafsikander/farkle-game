import type { User } from "@clerk/nextjs/server";
import { FC } from "react";
import UserCommnet from "./UserComment";
import PostStatus from "./PostStatus";

type Props = {
  user: User;
};
const MainProfileArea: FC<Props> = ({ user }) => {
  

  return (
    <>
      <main className="flex flex-col items-center w-full h-full gap-4">
        {/* Update Status Section */}
        <PostStatus user={user}/>

        {/* User Comments Section */}
        <div className="overflow-y-auto w-full h-full p-2">
            {
            Array.from({length:3}).map((_,index) => (
                <UserCommnet user={user} key={index} />
            ))
        }
        </div>

        
      </main>
    </>
  );
};

export default MainProfileArea;
