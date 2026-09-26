"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Bookmark, Check, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useFitLog } from "../../../context/FitLogContext";
import { getExercise } from "../../../data/exercises";

const WorkoutDetails = () => {
  const params = useParams();
  const { addToPlan, saveWorkout } = useFitLog();

  const [exercise, setExercise] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setExercise(getExercise(params.id));
    setIsLoading(false);
  }, [params.id]);

  const handleAddToPlan = () => {
    const result = addToPlan(exercise);

    setMessage(result.message);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleSave = () => {
    const result = saveWorkout(exercise);

    setMessage(result.message);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  if (isLoading) {
    return (
      <main className="details-page">
        <p className="text-zinc-400">Loading workout…</p>
      </main>
    );
  }

  if (!exercise) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0c10] px-5 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Workout not found</h1>

          <Link
            href="/"
            className="mt-5 inline-flex rounded-full bg-[#b4c77c] px-5 py-2 text-sm font-bold text-[#20251a]"
          >
            Back to workouts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="details-page">
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <Link
          href="/"
          className="back-link"
        >
          <ArrowLeft size={16} />
          Back to workouts
        </Link>

        {/* Main Layout */}
        <div className="details-grid">
          {/* Image */}
          <div className="details-image">
            <Image
              src={exercise.image}
              alt={exercise.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="details-copy">
            {/* Categories */}
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#b4c77c]/10 px-3 py-1 text-xs font-semibold text-[#b4c77c]">
                {exercise.category}
              </span>

              {exercise.secondaryCategory && (
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-400">
                  {exercise.secondaryCategory}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              {exercise.title}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl leading-7 text-zinc-400">
              {exercise.description ||
                "A powerful movement designed to build strength, improve performance, and support your fitness journey."}
            </p>

            {/* Specs */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111318]">
              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="border-r border-white/10 p-4">
                  <p className="text-xs text-zinc-500">EQUIPMENT</p>
                  <p className="mt-1 text-sm font-semibold">
                    {exercise.equipment}
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-xs text-zinc-500">DIFFICULTY</p>
                  <p className="mt-1 text-sm font-semibold">
                    {exercise.difficulty || "Intermediate"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="border-r border-white/10 p-4">
                  <p className="text-xs text-zinc-500">SETS</p>
                  <p className="mt-1 text-sm font-semibold">
                    {exercise.sets || "4"}
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-xs text-zinc-500">REPS</p>
                  <p className="mt-1 text-sm font-semibold">
                    {exercise.reps || "6-8"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3">
                <div className="border-r border-white/10 p-4">
                  <p className="text-xs text-zinc-500">DURATION</p>
                  <p className="mt-1 text-sm font-semibold">
                    {exercise.duration || exercise.time}
                  </p>
                </div>

                <div className="border-r border-white/10 p-4">
                  <p className="text-xs text-zinc-500">CALORIES</p>
                  <p className="mt-1 text-sm font-semibold">
                    {exercise.calories}
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-xs text-zinc-500">RATING</p>
                  <p className="mt-1 text-sm font-semibold">
                    ★ {exercise.rating}
                  </p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            {exercise.instructions && (
              <div className="mt-8">
                <h2 className="text-sm font-bold tracking-widest text-[#b4c77c]">
                  INSTRUCTIONS
                </h2>

                <ol className="mt-4 space-y-3">
                  {exercise.instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-zinc-400"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-white">
                        {index + 1}
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleAddToPlan}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#b4c77c] px-6 py-3 text-sm font-bold text-[#20251a] transition hover:bg-[#c2d796]"
              >
                <Plus size={17} />
                Add to today's plan
              </button>

              <button
                onClick={handleSave}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                <Bookmark size={17} />
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {message && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-white/10 bg-[#111318] px-5 py-3 text-sm text-white shadow-2xl">
          <Check size={17} className="text-[#b4c77c]" />

          {message}
        </div>
      )}
    </main>
  );
};

export default WorkoutDetails;
