import type { User } from "@clerk/nextjs/server";
import { FC } from "react";

type Props = {
    user: User;
}
const MainProfileArea:FC<Props> = ({ user }) => {
    return (
        <>
        <section className="w-full bg-white rounded-lg p-3">
            <h2 className="text-xl text-slate-800 mb-2">Hi {user.firstName}, share your thoughts!</h2>
            <input type="text" placeholder="What's on your mind?" className="w-full p-2 border rounded text-slate-800"/>
            <button type="button" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">Post</button>
        </section>
        </>
    );
}

export default MainProfileArea;