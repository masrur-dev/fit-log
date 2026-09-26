import cardImage from "../assets/all-card-img.png";

const workoutImage = cardImage.src;

const workoutDetails = {
  1: {
    description:
      "A compound press that builds chest, triceps, and pressing power from a stable bench.",
    sets: "4",
    reps: "6–8",
    instructions: [
      "Lie on the bench with eyes under the bar and feet planted.",
      "Unrack with locked elbows and lower the bar to mid-chest.",
      "Press up in a slight arc until elbows lock without bouncing.",
      "Keep shoulder blades pinched and maintain a comfortable back arch.",
    ],
  },
  2: {
    description:
      "A bodyweight pull that develops your lats, upper back, and grip strength.",
    sets: "4",
    reps: "6–10",
    instructions: [
      "Grip the bar just wider than shoulder width and let your body hang.",
      "Brace your midsection and draw your shoulder blades down.",
      "Pull until your chin clears the bar without swinging your legs.",
      "Lower under control until your arms are straight again.",
    ],
  },
  3: {
    description:
      "A foundational lower-body lift for building strong quads, glutes, and core stability.",
    sets: "4",
    reps: "6–8",
    instructions: [
      "Set the bar across your upper back and stand with feet shoulder width.",
      "Brace your core, then sit your hips down between your knees.",
      "Keep your whole foot planted and your knees tracking over your toes.",
      "Drive through the floor to stand tall without locking your knees hard.",
    ],
  },
  4: {
    description:
      "A standing shoulder press that trains the delts, triceps, and trunk together.",
    sets: "4",
    reps: "6–8",
    instructions: [
      "Hold the bar at upper-chest height with wrists stacked over elbows.",
      "Brace your glutes and abs while keeping ribs over your hips.",
      "Press the bar overhead and move your head through as it passes.",
      "Lower the bar smoothly to the starting position.",
    ],
  },
  5: {
    description:
      "A focused arm exercise that strengthens the biceps through a controlled curl.",
    sets: "3",
    reps: "10–12",
    instructions: [
      "Stand tall with a dumbbell in each hand and palms facing forward.",
      "Keep elbows close to your sides and shoulders relaxed.",
      "Curl the weights toward your shoulders without rocking your torso.",
      "Lower slowly until your arms are nearly straight.",
    ],
  },
  6: {
    description:
      "A bodyweight pressing movement that targets the triceps, chest, and front shoulders.",
    sets: "3",
    reps: "8–12",
    instructions: [
      "Grip the bars and support yourself with arms straight and shoulders down.",
      "Bend your elbows and lower your body with control.",
      "Stop when your shoulders feel comfortable, keeping your chest lifted.",
      "Press through your hands to return to the top.",
    ],
  },
  7: {
    description:
      "An anti-extension core hold that teaches you to brace while keeping your lower back supported.",
    sets: "3",
    reps: "20–40 sec",
    instructions: [
      "Lie on your back and press your lower back gently into the floor.",
      "Reach your arms overhead and extend your legs to a challenging height.",
      "Keep your ribs down and breathe steadily while holding the position.",
      "Shorten the lever or rest if your lower back starts to lift.",
    ],
  },
  8: {
    description:
      "A full-body barbell pull that builds posterior-chain strength and a strong, controlled hinge.",
    sets: "4",
    reps: "4–6",
    instructions: [
      "Stand with the bar over mid-foot and feet about hip width apart.",
      "Hinge down, grip the bar, and brace with a neutral spine.",
      "Push the floor away and stand with the bar close to your legs.",
      "Guide the bar back down by hinging at the hips, then bending your knees.",
    ],
  },
  9: {
    description:
      "A versatile bodyweight press for the chest, shoulders, and triceps.",
    sets: "3",
    reps: "10–20",
    instructions: [
      "Place your hands just outside shoulder width and make a straight line from head to heels.",
      "Brace your core and lower your chest toward the floor.",
      "Keep elbows angled slightly back instead of flaring straight out.",
      "Press the floor away to return to the start without letting hips sag.",
    ],
  },
  10: {
    description:
      "A moving single-leg exercise that challenges the quads, glutes, and balance.",
    sets: "3",
    reps: "8–10 / leg",
    instructions: [
      "Stand tall with feet hip width apart; hold dumbbells if desired.",
      "Step forward and lower until both knees bend comfortably.",
      "Keep your front knee aligned with your foot and torso steady.",
      "Push through the front foot, bring your feet together, and alternate sides.",
    ],
  },
  11: {
    description:
      "A seated rotational core exercise that trains control through the trunk.",
    sets: "3",
    reps: "12–16 / side",
    instructions: [
      "Sit with knees bent and lean back slightly while keeping your chest lifted.",
      "Hold a light medicine ball close to your torso.",
      "Rotate your shoulders and ribs together from side to side.",
      "Move smoothly and keep your lower back comfortable throughout.",
    ],
  },
  12: {
    description:
      "An isolation exercise for the side delts that builds shoulder strength and control.",
    sets: "3",
    reps: "12–15",
    instructions: [
      "Stand tall with light dumbbells at your sides and elbows softly bent.",
      "Raise your arms out to the sides to about shoulder height.",
      "Keep shoulders relaxed and avoid swinging the weights.",
      "Lower slowly to your sides and repeat.",
    ],
  },
};

const exerciseRows = [
  [1, "Barbell Bench Press", "Chest", "Arms", "Barbell, Bench", "25 min", "180 kcal", "4.8"],
  [2, "Pull-up", "Back", "Arms", "Pull-up Bar", "15 min", "120 kcal", "4.7"],
  [3, "Back Squat", "Legs", "Core", "Barbell, Rack", "30 min", "240 kcal", "4.9"],
  [4, "Overhead Press", "Shoulders", "Arms", "Barbell", "20 min", "150 kcal", "4.6"],
  [5, "Dumbbell Bicep Curl", "Arms", "Arms", "Dumbbells", "12 min", "80 kcal", "4.3"],
  [6, "Tricep Dips", "Arms", "Chest", "Dip Bar", "12 min", "85 kcal", "4.4"],
  [7, "Hollow-body Plank", "Core", "Arms", "Bodyweight", "10 min", "60 kcal", "4.4"],
  [8, "Conventional Deadlift", "Back", "Legs", "Barbell", "28 min", "260 kcal", "4.9"],
  [9, "Push-up", "Chest", "Arms", "Bodyweight", "10 min", "90 kcal", "4.5"],
  [10, "Walking Lunge", "Legs", "Core", "Dumbbells (optional)", "18 min", "170 kcal", "4.4"],
  [11, "Russian Twist", "Core", "Core", "Medicine Ball", "8 min", "70 kcal", "4.1"],
  [12, "Dumbbell Lateral Raise", "Shoulders", "Arms", "Dumbbells", "12 min", "75 kcal", "4.5"],
];

export const exercises = exerciseRows.map(
  ([id, title, category, secondaryCategory, equipment, time, calories, rating]) => ({
    id,
    title,
    name: title,
    category,
    secondaryCategory,
    equipment,
    time,
    duration: time,
    calories,
    rating,
    image: workoutImage,
    difficulty: "Intermediate",
    sets: workoutDetails[id].sets,
    reps: workoutDetails[id].reps,
    description: workoutDetails[id].description,
    instructions: workoutDetails[id].instructions,
  })
);

export const getExercise = (id) =>
  exercises.find((exercise) => String(exercise.id) === String(id));
