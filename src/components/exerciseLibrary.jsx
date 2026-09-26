"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import ExerciseCard from "./exerciseCard";
import { exercises } from "../data/exercises";

const categories = [
  "All",
  "Chest",
  "Back",
  "Legs",
  "Arms",
  "Shoulders",
  "Core",
];

export default function ExerciseLibrary() {
  const [category, setCategory] = useState("All");

  const filteredExercises =
    category === "All"
      ? exercises
      : exercises.filter(
          (exercise) =>
            exercise.category?.toLowerCase() === category.toLowerCase(),
        );

  return (
    <section id="library" className="bg-[#0b0c10] px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-lime-400">
              THE LIBRARY
            </p>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Twelve lifts covering every major muscle group.
            </h2>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 overflow-x-auto rounded-xl border border-white/10 bg-[#111216] p-1">
            <div className="flex shrink-0 items-center px-3 text-zinc-500">
              <SlidersHorizontal size={16} />
            </div>

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-lime-400 text-black"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </section>
  );
}
