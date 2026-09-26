import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import bannerImage from "./banner-img.png";

export default function Hero() {
  return (
    <section className="hero-wrap">
      <div className="hero-copy">
        <span className="eyebrow hero-eyebrow">WORKOUT LIBRARY</span>
        <h1>
          TRAIN WITH INTENT.
          <br />
          LOG EVERY SET.
        </h1>
        <p>
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" href="#workouts">
            Browse workouts <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <Image
          src={bannerImage}
          alt="Fitlog-banner-img"
          width={240}
          height={240}
          priority
          className="hero-banner-image"
        />
      </div>
    </section>
  );
}
