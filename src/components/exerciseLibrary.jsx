"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, Dumbbell } from "lucide-react";
import ExerciseCard from "./exerciseCard";
import { exercises } from "../data/exercises";

const categories = ["All", "Chest", "Back", "Legs", "Arms", "Shoulders", "Core"];

export default function ExerciseLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => exercises.filter((exercise) =>
    (category === "All" || exercise.category === category || exercise.secondaryCategory === category) &&
    `${exercise.title} ${exercise.equipment} ${exercise.category} ${exercise.secondaryCategory}`.toLowerCase().includes(query.toLowerCase())
  ), [category, query]);

  return <section id="workouts" className="library-section">
    <div className="section-heading"><div><span className="eyebrow">THE LIBRARY</span><h2>Find your next lift.</h2><p>Twelve lifts covering every major muscle group.</p></div><span className="result-count">{filtered.length} WORKOUTS</span></div>
    <div className="library-tools"><label className="search-box"><Search size={17}/><input aria-label="Search workouts" placeholder="Search exercises or equipment" value={query} onChange={(event) => setQuery(event.target.value)}/></label><div className="category-filters" aria-label="Filter by muscle group"><SlidersHorizontal size={16}/>{categories.map((item) => <button key={item} className={category === item ? "filter-chip active" : "filter-chip"} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
    {filtered.length ? <div className="exercise-grid">{filtered.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise}/>)}</div> : <div className="empty-results"><Dumbbell size={25}/><h3>No matching workouts</h3><p>Try another search or muscle group.</p><button className="text-button" onClick={() => {setCategory("All");setQuery("")}}>Clear filters</button></div>}
  </section>;
}
