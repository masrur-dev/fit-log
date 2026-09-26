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

        {/* Logo */}
        <Link href="/" className="brand">
          <span className="brand-icon"><Dumbbell size={16} strokeWidth={2.6}/></span><span>FITLOG</span>
        </Link>

        {/* Navigation */}
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

        {/* Counters */}
        <div className="nav-counts">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="nav-count"
          >
            <ClipboardList size={13}/><span>Plan</span><b>{plan.length}</b>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="nav-count saved"
          >
            <Bookmark size={12}/><span>Saved</span><b>{saved.length}</b>
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
