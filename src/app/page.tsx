import Image from "next/image";
import ToggleTheme from "./components/ToggleTheme";
import HeroSection from "./components/home/HeroSection";
import WhyTrustSection from "./components/home/WhyTrustSection";
import TransformSection from "./components/home/TransformSection";

export default function Home() {
  return (
    <>
      <main className="p-0 bg-neutral w-full">
        <div className="max-w-450 mx-auto">
          <HeroSection />
          <WhyTrustSection />
          <TransformSection />
          <ToggleTheme />
        </div>
      </main>
    </>
  );
}
