import { checkUser } from "@/lib/checkUser";
import { SignedOut, SignInButton } from "@clerk/nextjs";

const Hero = async () => {

    const user = await checkUser();
    return(
        <>
        <div className="w-[70%] h-[40%] bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-md flex justify-center items-center text-white">
          <div className="block text-center p-4">
            <h1 className="relative text-5xl text-white">
              Welcome {user? user.fullName : 'Guest'} to Farkle game!
            </h1>
            <h3 className="text-xl mt-2">
              This webapp is inspired from the game Farkle in{" "}
              <a
                href="https://kingdomcomerpg.com/"
                target="_blank"
                className="font-bold underline"
              >
                Kingdom Come Deliverence 2
              </a>
              .
            </h3>
            <SignedOut>
              <p className="text-lg mt-2">
                Please sign in to play the game.
              </p>
              <SignInButton mode="modal">
                <button className="bg-transparent text-white font-medium py-2 px-4 rounded mt-4 border-white/20 border-2 cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
        </>
    );
}

export default Hero;