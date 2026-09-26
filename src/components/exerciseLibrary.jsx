"use client";

import { useMemo, useState } from "react";
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

const sortOptions = [
  { label: "Duration", value: "duration" },
  { label: "Calories", value: "calories" },
  { label: "Ratings", value: "rating" },
];

export default function ExerciseLibrary() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const filtered = useMemo(() => {
    const result = exercises.filter(
      (exercise) =>
        category === "All" ||
        exercise.category === category ||
        exercise.secondaryCategory === category,
    );

    if (sortBy === "duration") {
      return [...result].sort((a, b) => {
        const aTime = parseInt(a.time) || 0;
        const bTime = parseInt(b.time) || 0;

        return aTime - bTime;
      });
    }

    if (sortBy === "calories") {
      return [...result].sort((a, b) => {
        const aCalories = parseInt(a.calories) || 0;
        const bCalories = parseInt(b.calories) || 0;

        return bCalories - aCalories;
      });
    }

    if (sortBy === "rating") {
      return [...result].sort((a, b) => {
        return Number(b.rating) - Number(a.rating);
      });
    }

    return result;
  }, [category, sortBy]);

  return (
    <section id="workouts" className="library-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">THE LIBRARY</span>

          <h2>Find your next lift.</h2>

          <p>Twelve lifts covering every major muscle group.</p>
        </div>

        <span className="result-count">{filtered.length} WORKOUTS</span>
      </div>

      <div className="library-tools">
        <div className="category-filters" aria-label="Filter by muscle group">
          <SlidersHorizontal size={16} />

          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item ? "filter-chip active" : "filter-chip"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="sort-options">
          <span className="sort-label">SORT BY</span>

          {sortOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={
                sortBy === option.value ? "sort-button active" : "sort-button"
              }
              onClick={() =>
                setSortBy((current) =>
                  current === option.value ? "" : option.value,
                )
              }
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length ? (
        <div className="exercise-grid">
          {filtered.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      ) : (
        <div className="empty-results">
          <h3>No matching workouts</h3>

          <p>Try another muscle group.</p>

          <button className="text-button" onClick={() => setCategory("All")}>
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
