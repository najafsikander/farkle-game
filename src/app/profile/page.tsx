import { checkUser } from "@/lib/checkUser";

//TODO: Complete Profile Page. Profile pic, Avatar background, details, friends list, game tracker history.
//TODO: Update delete user webhook
const ProfilePage = async () => {
  const user = await checkUser();

  if (!user) return <h1>User isnt logged in</h1>;
  return (
    <section className="flex flex-row justify-center w-full h-screen">
      <section className="flex flex-row w-2/3 p-3 my-15 border rounded gap-2">
      <aside className="basis-1/3 w-full bg-slate-600">{user.firstName}</aside>
      <section className="basis-2/3 w-full bg-slate-400">{user.createdAt}</section>
      </section>
    </section>
  );
};

export default ProfilePage;
