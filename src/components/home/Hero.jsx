import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import bannerImage from "./banner-img.png";

export default function Hero() {
  return (
    <section className="bg-[#0b0c10]">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 lg:min-h-[760px]">
        {/* Left */}
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#b4c77c]">
            Train smarter
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Train Better.
            <br />
            <span className="text-[#b4c77c]">Live Stronger.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            Explore powerful exercises, build your workout plan, and stay
            consistent with every session.
          </p>

          <Link
            href="#library"
            className="hero-cta-button mt-9 inline-flex items-center gap-3 rounded-full px-6 py-3 font-bold transition"
          >
            Explore Library
            <ArrowDownRight size={18} />
          </Link>
        </div>

        {/* Right image */}
        <div className="relative h-[380px] overflow-hidden rounded-3xl md:h-[520px]">
          <img
            src={bannerImage.src}
            alt="Workout"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
