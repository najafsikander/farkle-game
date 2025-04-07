const Hero = () => {
    return(
        <>
        <div className="w-full h-[60%] bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-md flex justify-center items-center text-white">
          <div className="block text-center p-4">
            <h1 className="relative text-5xl text-white">
              Welcome to Farkle game!
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
          </div>
        </div>
        </>
    );
}

export default Hero;