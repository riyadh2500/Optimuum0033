"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGlobalContext } from "@/context/globalContext";
import { play } from "@/utils/Icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function page() {
  const router = useRouter();
  const { quizSetup, setQuizSetup, selectedQuiz, setFilteredQuestions } =
    useGlobalContext();

  useEffect(() => {
    if (!selectedQuiz) {
      router.push("/");
    }
  }, [selectedQuiz, router]);

  useEffect(() => {
    // No difficulty filter — pass all questions from the selected quiz
    if (selectedQuiz?.questions) {
      setFilteredQuestions(selectedQuiz.questions);
    }
  }, [selectedQuiz]);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    const maxQuestions = selectedQuiz?.questions.length || 1;
    const newCount = isNaN(value) || value < 1 ? 1 : Math.min(value, maxQuestions);
    setQuizSetup((prev: {}) => ({ ...prev, questionCount: newCount }));
  };

  const handleDifficultyChange = (difficulty: string) => {
    setQuizSetup((prev: {}) => ({ ...prev, difficulty }));
  };

  const startQuiz = async () => {
    // Since difficulty was removed from UI, just take the first N questions directly
    const selectedQuestions = selectedQuiz?.questions.slice(0, quizSetup?.questionCount);

    if (selectedQuestions && selectedQuestions.length > 0) {
      try {
        await axios.post("/api/user/quiz/start", {
          categoryId: selectedQuiz?.categoryId,
          quizId: selectedQuiz?.id,
        });
      } catch (error) {
        console.log("Error starting quiz: ", error);
      }
      router.push("/quiz");
    } else {
      toast.error("No questions found for the selected criteria");
    }
  };

  return (
    // Full-screen overlay — covers header, main AND footer completely
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center p-4">

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Card header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
          <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-1">
            {selectedQuiz?.title}
          </p>
          <h1 className="text-3xl font-black text-white">Quiz Setup</h1>
        </div>

        {/* Card body */}
        <div className="px-8 py-6 space-y-6">

          {/* Question count */}
          <div className="space-y-2">
            <Label htmlFor="questionCount" className="text-sm font-bold text-gray-700 uppercase tracking-wide">
              Number of Questions
            </Label>
            <div className="flex items-center gap-3">
              <Input
                type="number"
                min={1}
                id="questionCount"
                value={quizSetup?.questionCount}
                onChange={handleQuestionChange}
                max={selectedQuiz?.questions.length}
                className="text-lg font-bold"
              />
              <span className="text-sm text-gray-400 whitespace-nowrap">
                max {selectedQuiz?.questions.length}
              </span>
            </div>
          </div>

          {/* Category (locked) */}
          <div className="space-y-2">
            <Label className="text-sm font-bold text-gray-700 uppercase tracking-wide">
              Category
            </Label>
            <div className="px-4 py-3 rounded-lg border-2 bg-gray-50 text-gray-500 font-semibold text-sm">
              {selectedQuiz?.title || "Selected Quiz"}
            </div>
          </div>

        </div>

        {/* Card footer */}
        <div className="px-8 py-5 bg-gray-50 border-t-2 flex items-center justify-between gap-4">
          <button
            onClick={() => router.back()}
            className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← Back
          </button>
          <Button
            variant={"blue"}
            className="px-10 py-5 font-bold text-white text-lg rounded-xl flex-1"
            onClick={startQuiz}
          >
            <span className="flex items-center justify-center gap-2">
              {play} Start Quiz
            </span>
          </Button>
        </div>

      </div>
    </div>
  );
}

export default page;
