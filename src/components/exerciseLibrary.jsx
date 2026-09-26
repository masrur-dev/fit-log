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
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#b4c77c]">
              THE LIBRARY
            </p>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Workout library
            </h2>
          </div>

        </div>

        {/* Cards */}
        <div className="exercise-grid gap-3 sm:gap-4">
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
        </div>
      </div>
    </section>
  );
}
