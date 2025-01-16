import Hero from "../components/Home/hero/hero";
import Subhero from "../components/Home/subhero/Subhero";

export default function Home() {
  return (
    <div className=" bg-[#09090A] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Subhero />
    </div>
  );
}
