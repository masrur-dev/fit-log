import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star, ArrowUpRight } from "lucide-react";

export default function ExerciseCard({ exercise }) {
  return <Link href={`/workout/${exercise.id}`} className="exercise-card">
    <div className="card-image"><Image src={exercise.image} alt={exercise.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"/><span className="card-open"><ArrowUpRight size={17}/></span></div>
    <div className="card-content"><div className="tag-row"><span className="muscle-tag">{exercise.category}</span><span className="muscle-tag muted">{exercise.secondaryCategory}</span></div><h3>{exercise.title}</h3><p className="equipment-label">{exercise.equipment}</p><div className="card-stats"><span><Clock3/>{exercise.time}</span><span><Flame/>{exercise.calories}</span><span><Star/>{exercise.rating}</span></div></div>
  </Link>;
}
