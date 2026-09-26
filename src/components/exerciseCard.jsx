"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Clock3,
  Flame,
  Star,
  ArrowUpRight,
  Bookmark,
  Check,
  X,
} from "lucide-react";

import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

export default function ExerciseCard({ exercise }) {
  const { saved, saveWorkout, removeFromSaved } = useFitLog();

  const [toast, setToast] = useState(null);

  const isSaved = saved.some((item) => item.id === exercise.id);

  const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 2200);
  };

  const handleSave = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isSaved) {
      removeFromSaved(exercise.id);
      showToast("Removed from saved.", "success");
      return;
    }

    const result = saveWorkout(exercise);

    if (result.success) {
      showToast("Saved for later.", "success");
    } else {
      showToast("Already saved.", "error");
    }
  };

  return (
    <>
      <div className="exercise-card">
        <Link href={`/workout/${exercise.id}`}>
          <div className="card-image">
            <Image
              src={exercise.image}
              alt={exercise.title}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />

            <span className="card-open">
              <ArrowUpRight size={17} />
            </span>
          </div>

          <div className="card-content">
            <div className="tag-row">
              <span className="muscle-tag">{exercise.category}</span>

              <span className="muscle-tag muted">
                {exercise.secondaryCategory}
              </span>
            </div>

            <h3>{exercise.title}</h3>

            <p className="equipment-label">{exercise.equipment}</p>

            <div className="card-stats">
              <span>
                <Clock3 />
                {exercise.time}
              </span>

              <span>
                <Flame />
                {exercise.calories}
              </span>

              <span>
                <Star />
                {exercise.rating}
              </span>
            </div>
          </div>
        </Link>

        <div className="card-save-wrap">
          <button
            type="button"
            className={`save-button ${isSaved ? "saved" : ""}`}
            onClick={handleSave}
          >
            {isSaved ? <X size={14} /> : <Bookmark size={14} />}

            <span>{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>

      {toast && (
        <div className={`toast ${toast.type === "error" ? "toast-error" : ""}`}>
          <span className="toast-icon">
            {toast.type === "error" ? <X size={14} /> : <Check size={14} />}
          </span>

          <span>{toast.message}</span>
        </div>
      )}
    </>
  );
}
