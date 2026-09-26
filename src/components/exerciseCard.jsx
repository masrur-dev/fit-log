import Link from "next/link";
import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";

export default function ExerciseCard({ exercise }) {
  const categories = [...new Set([exercise.category, exercise.secondaryCategory].filter(Boolean))];

  return (
    <Link
      href={`/workout/${exercise.id}`}
      className="exercise-card group block"
    >
      <div className="card-image">
        <Image src={exercise.image} alt={exercise.title} fill sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw" />
        <span className="card-open" aria-hidden="true">↗</span>
      </div>

      <div className="card-content">
        <div className="tag-row">
          {categories.map((category, index) => (
            <span className={`muscle-tag${index ? " muted" : ""}`} key={category}>{category}</span>
          ))}
        </div>
        <h3>{exercise.title}</h3>
        <p className="equipment-label">{exercise.equipment}</p>
        <div className="card-stats">
          <span><Clock3 />{exercise.duration}</span>
          <span><Flame />{exercise.calories}</span>
          <span><Star />{exercise.rating}</span>
        </div>
      </div>
    </Link>
  );
}
