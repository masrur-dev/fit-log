"use client";

import { useState } from "react";
import { ChevronDown, Dumbbell } from "lucide-react";

const sortOptions = ["Duration", "Calories", "Rating"];

export default function MyPlan() {
  const [sortBy, setSortBy] = useState("Duration");
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0c10] px-5 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-lime-400">
              MY PLAN
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Your Workout Plan
            </h1>

            <p className="mt-3 max-w-xl text-zinc-400">
              Keep your favorite workouts organized and ready for your next
              training session.
            </p>
          </div>

          {/* Sort */}
          <div className="relative w-full md:w-52">
            <button
              onClick={() => setOpen(!open)}
              className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#111216] px-4 py-3 text-sm font-semibold text-white transition hover:border-lime-400/40"
            >
              <span>
                Sort by: <span className="text-lime-400">{sortBy}</span>
              </span>

              <ChevronDown
                size={18}
                className={`transition ${open ? "rotate-180" : ""}`}
              />
            </button>

            {open && (
              <div className="absolute right-0 z-20 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#15161b] p-1 shadow-2xl">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setOpen(false);
                    }}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm transition ${
                      sortBy === option
                        ? "bg-lime-400 text-black"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Plan content */}
        <div className="rounded-2xl border border-white/10 bg-[#101115] p-6">
          {/* তোমার existing workout cards/list এখানে */}

          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <div className="mb-4 rounded-full bg-lime-400/10 p-4">
              <Dumbbell className="text-lime-400" size={28} />
            </div>

            <h2 className="text-xl font-bold">Your plan is empty</h2>

            <p className="mt-2 max-w-md text-sm text-zinc-500">
              Save exercises from the workout library to build your personal
              workout plan.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
