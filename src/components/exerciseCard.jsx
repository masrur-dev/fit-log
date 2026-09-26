import Link from "next/link";

export default function ExerciseCard({ exercise }) {
  return (
    <Link
      href={`/workout/${exercise.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#111216] transition duration-300 hover:-translate-y-1 hover:border-lime-400/40"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={exercise.image}
          alt={exercise.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Normal gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition duration-300 group-hover:opacity-100" />

        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-lime-400/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            {exercise.category}
          </span>
        </div>

        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-black uppercase tracking-tight text-white">
            {exercise.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-400">
            {exercise.secondaryCategory}
          </span>

          <span className="font-semibold text-lime-400">
            {exercise.duration} min
          </span>
        </div>
      </div>
    </Link>
  );
}

