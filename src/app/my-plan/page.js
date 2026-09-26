"use client";

import Link from "next/link";
import Image from "next/image";
import { Dumbbell, Check, X, Clock3, Flame, Star } from "lucide-react";
import { useState } from "react";
import { useFitLog } from "../../context/FitLogContext";

const MyPlan = () => {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const totalMinutes = plan.reduce(
    (total, exercise) =>
      total + parseInt(exercise.duration || exercise.time || 0, 10),
    0
  );

  const totalCalories = plan.reduce(
    (total, exercise) =>
      total + parseInt(exercise.calories || 0, 10),
    0
  );

  const handleDone = (id) => {
    removeFromPlan(id);
  };

  const currentList = [...(activeTab === "plan" ? plan : saved)].sort((a,b) => sortBy === "rating" ? Number(b.rating) - Number(a.rating) : parseInt(a.duration || a.time, 10) - parseInt(b.duration || b.time, 10));

  return (
    <main className="plan-page">
      <div>

        {/* Header */}
        <div className="mb-10">
          <div className="plan-intro"><h1>MY PLAN</h1>
          <p>
            Cap of five lifts for today. Finish them, then load more.
          </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="metric-grid">

          <div className="metric"><span>Exercises</span><strong>{plan.length}</strong></div>

          <div className="metric"><span>Minutes</span><strong>{totalMinutes}</strong></div>

          <div className="metric"><span>Calories</span><strong>{totalCalories}</strong></div>

        </div>

        {/* Tabs */}
        <div className="plan-controls"><div className="plan-tabs">

          <button
            onClick={() => setActiveTab("plan")}
            className={
              activeTab === "plan"
                ? "active"
                : ""
            }
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={
              activeTab === "saved"
                ? "active"
                : ""
            }
          >
            Saved
          </button>

        </div><label className="sort-control">Sort by <select value={sortBy} onChange={(event)=>setSortBy(event.target.value)}><option value="duration">Duration</option><option value="rating">Rating</option></select></label></div>

        {/* Empty State */}
        {currentList.length === 0 ? (
          <div className="plan-empty"><Dumbbell size={24}/>

            <h2>
              NOTHING HERE YET
            </h2>

            <p>
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className=""
            >
              Go to workouts
            </Link>

          </div>
        ) : (

          /* Workout List */
          <div className="plan-list">

            {currentList.map((exercise) => (
              <div
                key={exercise.id}
                className="plan-row"
              >

                {/* Image */}
                <div>
                  <Image
                    src={exercise.image}
                    alt={exercise.title}
                    width={320}
                    height={180}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">

                  <div className="tag-row">
                    <span className="muscle-tag">
                      {exercise.category}
                    </span>

                    <span className="muscle-tag muted">
                      {exercise.secondaryCategory}
                    </span>
                  </div>

                  <h2>
                    {exercise.title}
                  </h2>

                  <p>
                    {exercise.equipment}
                  </p>

                  <div className="row-stats">
                    <span>
                      <Clock3 size={12}/> {exercise.duration || exercise.time}
                    </span>

                    <span>
                      <Flame size={12}/> {exercise.calories}
                    </span>

                    <span>
                      <Star size={12}/> {exercise.rating}
                    </span>
                  </div>

                </div>

                {/* Actions */}
                <div className="row-actions">

                  <Link
                    href={`/workout/${exercise.id}`}
                    className=""
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      onClick={() => handleDone(exercise.id)}
                      className="done"
                    >
                      <Check size={14} />
                      Mark as Done
                    </button>
                  )}

                  <button
                    onClick={() =>
                      activeTab === "plan"
                        ? removeFromPlan(exercise.id)
                        : removeFromSaved(exercise.id)
                    }
                    className="remove"
                  >
                    <X size={14} />
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </main>
  );
};

export default MyPlan;
