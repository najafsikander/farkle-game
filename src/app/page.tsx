import Hero from "./components/Hero";
//TODO: Add Clerk implementation for account management
//TODO: Add user friendship and search system
export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-center items-center h-full w-full">
        {/* Hero Section */}
        <Hero/>
      </div>
    </>
  );
}
