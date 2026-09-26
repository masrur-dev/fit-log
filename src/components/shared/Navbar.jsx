"use client";

import Link from "next/link";
import { Dumbbell, Bookmark, ClipboardList } from "lucide-react";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const { plan, saved } = useFitLog();
  const pathname = usePathname();

  return (
    <header className="app-header">
      <nav className="nav-shell">
        <Link href="/" className="brand">
          <span className="brand-icon">
            <Dumbbell size={17} strokeWidth={2.6} />
          </span>
          <span>FITLOG</span>
        </Link>

        <div className="nav-center">
          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`nav-link ${pathname === "/my-plan" ? "active" : ""}`}
          >
            My Plan
          </Link>
        </div>

        <div className="nav-counts">
          <Link href="/my-plan" className="nav-count">
            <ClipboardList size={15} />
            <span>Plan</span>
            <b>{plan.length}</b>
          </Link>

          <Link href="/my-plan" className="nav-count saved">
            <Bookmark size={14} />
            <span>Saved</span>
            <b>{saved.length}</b>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
