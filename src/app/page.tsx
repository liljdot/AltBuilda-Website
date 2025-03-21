import Image from "next/image";
import ToggleTheme from "./components/ToggleTheme";
import HeroSection from "./components/home/HeroSection";
import WhyTrustSection from "./components/home/WhyTrustSection";

export default function Home() {
  return (
    <>
      <main className="p-0 bg-neutral">
        <HeroSection />
        <WhyTrustSection />
        <ToggleTheme />
      </main>
    </>
  );
}
