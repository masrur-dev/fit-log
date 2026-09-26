"use client";

import ExerciseCard from "./exerciseCard";
import { exercises } from "../data/exercises";

export default function ExerciseLibrary() {
  return (
    <section id="library" className="bg-[#0b0c10] px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-lime-400">
              THE LIBRARY
            </p>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Twelve lifts covering every major muscle group.
            </h2>
          </div>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
        </div>
      </div>
    </section>
  );
}
