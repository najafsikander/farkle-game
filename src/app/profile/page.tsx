import { checkUser } from "@/lib/checkUser";
const ProfilePage = async () => {
    const user = await checkUser();

    if (!user) return (<h1>User isnt logged in</h1>)
    return(
        <section className="flex flex-row justify-center w-full h-screen">
            <h1 className="mt-10">{user.fullName}</h1>
        </section>
    );
}

export default ProfilePage;