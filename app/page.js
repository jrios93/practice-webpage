import Article from "./components/Article";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="min-h-screen p-10 flex gap-12 flex-col items-center ">
      <div className="lg:w-3/4 xs:1/2 md:w-3/4 sm:w-3/4">
        <Nav />
        <Hero />
        <Article />
      </div>
    </main>
  );
}
