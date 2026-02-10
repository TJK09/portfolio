import Navbar from "./Navbar";
import HeroContent from "./HeroContent"
export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Left background */}
      <div className="absolute inset-y-0 left-0 w-[45%] bg-[#e5e5e5]" />

      {/* Right background (diagonal) */}
      <div
        className="absolute inset-y-0 right-0 w-[60%] bg-black"
        style={{
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-10 ">
        <Navbar />
        <HeroContent/>
      </div>

    </section>
  );
}
