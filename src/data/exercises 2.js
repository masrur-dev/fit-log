const image = "/workout.png";
const instructions = ["Set your stance and brace your core before starting.", "Move with control through the full range of motion.", "Keep your breathing steady and avoid bouncing.", "Return to the starting position and repeat."];

export const exercises = [
  [1,"Barbell Bench Press","Chest","Arms","Barbell, Bench","25 min","180 kcal","4.8"],
  [2,"Pull-up","Back","Arms","Pull-up Bar","15 min","120 kcal","4.7"],
  [3,"Back Squat","Legs","Core","Barbell, Rack","30 min","240 kcal","4.9"],
  [4,"Overhead Press","Shoulders","Arms","Barbell","20 min","150 kcal","4.6"],
  [5,"Dumbbell Bicep Curl","Arms","Arms","Dumbbells","12 min","80 kcal","4.3"],
  [6,"Tricep Dips","Arms","Chest","Dip Bar","12 min","85 kcal","4.4"],
  [7,"Hollow-body Plank","Core","Arms","Bodyweight","10 min","60 kcal","4.4"],
  [8,"Conventional Deadlift","Back","Legs","Barbell","28 min","260 kcal","4.9"],
  [9,"Push-up","Chest","Arms","Bodyweight","10 min","90 kcal","4.5"],
  [10,"Walking Lunge","Legs","Core","Dumbbells (optional)","18 min","170 kcal","4.4"],
  [11,"Russian Twist","Core","Core","Medicine Ball","8 min","70 kcal","4.1"],
  [12,"Dumbbell Lateral Raise","Shoulders","Arms","Dumbbells","12 min","75 kcal","4.5"],
].map(([id,title,category,secondaryCategory,equipment,time,calories,rating]) => ({id,title,name:title,category,secondaryCategory,equipment,time,duration:time,calories,rating,image,difficulty:"Intermediate",sets:"4",reps:"6–8",description:`A focused ${category.toLowerCase()} exercise to build strength and improve your training routine.`,instructions}));

export const getExercise = (id) => exercises.find((exercise) => String(exercise.id) === String(id));
