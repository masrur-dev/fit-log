"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FitLogContext = createContext();

const readStoredList = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
};

export const FitLogProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const storedPlan = readStoredList("fitlog-plan");
    const storedSaved = readStoredList("fitlog-saved");

    setPlan(storedPlan);
    setSaved(storedSaved);
    setIsLoaded(true);
  }, []);

  // Save plan
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, isLoaded]);

  // Save saved workouts
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, isLoaded]);

  // Add to today's plan
  const addToPlan = (exercise) => {
    if (plan.length >= 5) {
      return {
        success: false,
        message: "Today's plan is full.",
      };
    }

    const alreadyExists = plan.some((item) => item.id === exercise.id);

    if (alreadyExists) {
      return {
        success: false,
        message: "Already added to today's plan.",
      };
    }

    setPlan((prev) => [...prev, exercise]);

    return {
      success: true,
      message: "Added to today's plan.",
    };
  };

  // Remove from plan
  const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
  };

  // Save workout
  const saveWorkout = (exercise) => {
    const alreadySaved = saved.some((item) => item.id === exercise.id);

    if (alreadySaved) {
      return {
        success: false,
        message: "Already saved.",
      };
    }

    setSaved((prev) => [...prev, exercise]);

    return {
      success: true,
      message: "Saved for later.",
    };
  };

  // Remove from saved
  const removeFromSaved = (id) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        isLoaded,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeFromSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  return useContext(FitLogContext);
};
