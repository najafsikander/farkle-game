import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-center items-center h-[85vh] w-full">
        {/* Hero Section */}
        <Hero/>
      </div>
    </>
  );
}
