"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import { useFitLog } from "../../context/FitLogContext";

const sortOptions = ["Duration", "Calories", "Rating"];

function numberValue(value) {
  return Number.parseFloat(String(value ?? "0")) || 0;
}

export default function MyPlan() {
  const { plan, saved, removeFromPlan, removeFromSaved, isLoaded } = useFitLog();
  const [activeTab, setActiveTab] = useState("Today’s Plan");
  const [sortBy, setSortBy] = useState("Duration");
  const [search, setSearch] = useState("");
  const [completed, setCompleted] = useState([]);
  const [toast, setToast] = useState("");
  const toastTimer = useRef(null);
  const isPlan = activeTab === "Today’s Plan";
  const items = isPlan ? plan : saved;
  const visibleItems = useMemo(() => items
    .filter((item) => item.title.toLowerCase().includes(search.trim().toLowerCase()))
    .sort((a, b) => numberValue(a[sortBy.toLowerCase()]) - numberValue(b[sortBy.toLowerCase()])), [items, search, sortBy]);
  const totalMinutes = plan.reduce((sum, item) => sum + numberValue(item.duration), 0);
  const totalCalories = plan.reduce((sum, item) => sum + numberValue(item.calories), 0);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const showToast = (message) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2500);
  };

  return (
    <main className="plan-page">
      <div className="plan-intro">
        <span className="eyebrow">MY PLAN</span>
        <h1>Your Workout Plan</h1>
        <p>Keep your favorite workouts organized and ready for your next training session.</p>
      </div>

      <div className="metric-grid">
        <div className="metric"><span>Exercises</span><strong>{plan.length}</strong></div>
        <div className="metric"><span>Minutes</span><strong>{totalMinutes}</strong></div>
        <div className="metric"><span>Calories</span><strong>{totalCalories}</strong></div>
      </div>

      <div className="plan-controls">
        <div className="plan-tabs" role="tablist" aria-label="Workout list">
          {["Today’s Plan", "Saved"].map((tab) => (
            <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <label className="search-box !h-[34px] !w-40 !px-2">
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search workouts" aria-label="Search workouts" />
          </label>
          <label className="sort-control">Sort by
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort workouts">
              {sortOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
        </div>
      </div>

      {!isLoaded ? <div className="plan-empty"><p>Loading your workouts…</p></div> : visibleItems.length ? (
        <div className="plan-list">
          {visibleItems.map((item) => {
            const done = completed.includes(item.id);
            return <article className="plan-row" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="min-w-0">
                <div className="tag-row"><span className="muscle-tag">{item.category}</span></div>
                <h2>{item.title}</h2>
                <p>{item.equipment}</p>
                <div className="row-stats">
                  <span><Clock3 size={12}/>{item.duration}</span>
                  <span><Flame size={12}/>{item.calories}</span>
                  <span><Star size={12}/>{item.rating}</span>
                </div>
              </div>
              <div className="row-actions">
                <Link href={`/workout/${item.id}`}>View Details</Link>
                {isPlan && <button type="button" className="done" onClick={() => { setCompleted((prev) => done ? prev.filter((id) => id !== item.id) : [...prev, item.id]); showToast(done ? "Workout marked as not done." : "Workout marked as done."); }}><Check size={12}/>{done ? "Done" : "Mark as Done"}</button>}
                <button type="button" className="remove" aria-label={`Remove ${item.title}`} onClick={() => { isPlan ? removeFromPlan(item.id) : removeFromSaved(item.id); showToast(isPlan ? "Removed from today’s plan." : "Removed from saved workouts."); }}><X size={14}/></button>
              </div>
            </article>;
          })}
        </div>
      ) : (
        <div className="plan-empty">
          <h2>{search ? "No workouts found" : isPlan ? "Nothing here yet" : "No saved workouts"}</h2>
          <p>{search ? "Try another search." : "Browse the library and add a lift to get your training moving."}</p>
          {!search && <Link href="/">Go to workouts</Link>}
        </div>
      )}
      {toast && <div className="toast" role="status"><span className="toast-icon"><Check size={13}/></span>{toast}</div>}
    </main>
  );
}
