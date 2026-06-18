"use client";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/globalContext";
import { play } from "@/utils/Icons";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();
  const { quizResponses, selectedQuiz } = useGlobalContext();

  if (!quizResponses || quizResponses.length === 0) {
    router.push("/");
    return null;
  }

  const correctAnswers = quizResponses.filter(
    (res: { isCorrect: boolean }) => res.isCorrect
  ).length;
  const totalQuestions = quizResponses.length;
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  let message = "";
  let emoji = "";
  if (scorePercentage < 25)        { message = "Keep studying — you'll get there!"; emoji = "😅"; }
  else if (scorePercentage < 50)   { message = "You're getting there! Keep practicing."; emoji = "💪"; }
  else if (scorePercentage < 75)   { message = "Good effort! You're above average."; emoji = "👍"; }
  else if (scorePercentage < 100)  { message = "Great job! So close to perfect!"; emoji = "🔥"; }
  else                              { message = "Outstanding! You got everything right!"; emoji = "🏆"; }

  const scoreColor =
    scorePercentage >= 75 ? "text-green-600" :
    scorePercentage >= 50 ? "text-indigo-600" :
    scorePercentage >= 25 ? "text-amber-500" : "text-red-500";

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-8">

      {/* Score card */}
      <div className="text-center border-2 rounded-3xl p-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <p className="text-5xl mb-3">{emoji}</p>
        <h1 className="text-3xl font-black text-gray-900 mb-1">Quiz Results</h1>
        <p className="text-gray-500 mb-4">{selectedQuiz?.title}</p>
        <p className={`text-6xl font-black ${scoreColor}`}>
          {scorePercentage.toFixed(0)}%
        </p>
        <p className="text-lg text-gray-600 mt-2">
          <span className="font-black text-gray-900">{correctAnswers}</span> correct out of{" "}
          <span className="font-black text-gray-900">{totalQuestions}</span> questions
        </p>
        <p className="font-semibold text-gray-500 mt-2">{message}</p>

        <div className="mt-6">
          <Button
            variant={"green"}
            className="px-10 py-5 font-bold text-white text-lg rounded-xl"
            onClick={() => router.push("/quiz/setup/" + selectedQuiz?.id)}
          >
            {play} Play Again
          </Button>
        </div>
      </div>

      {/* Answer review */}
      <div>
        <h2 className="text-xl font-black text-gray-800 mb-4">Answer Review</h2>
        <div className="space-y-4">
          {selectedQuiz?.questions
            ?.filter((q: any) =>
              quizResponses.some((r: any) => r.questionId === q.id)
            )
            .map((question: any, idx: number) => {
              const response = quizResponses.find(
                (r: any) => r.questionId === question.id
              );
              const isCorrect = response?.isCorrect;

              return (
                <div
                  key={question.id}
                  className={`border-2 rounded-2xl p-5 ${
                    isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                  }`}
                >
                  {/* Question */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white ${isCorrect ? "bg-green-500" : "bg-red-500"}`}>
                      {isCorrect ? "✓" : "✗"}
                    </span>
                    <p className="font-bold text-gray-800 leading-snug">
                      {idx + 1}. {question.text}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="space-y-2 ml-10">
                    {question.options.map((option: any) => {
                      const wasSelected = response?.optionId === option.id;
                      const isCorrectOption = option.isCorrect;

                      let style = "border-gray-200 bg-white text-gray-600";
                      let badge = null;

                      if (isCorrectOption) {
                        style = "border-green-400 bg-green-100 text-green-800 font-semibold";
                        badge = <span className="ml-2 text-xs font-black text-green-600 bg-green-200 px-2 py-0.5 rounded-full">Correct</span>;
                      }
                      if (wasSelected && !isCorrectOption) {
                        style = "border-red-400 bg-red-100 text-red-800 font-semibold";
                        badge = <span className="ml-2 text-xs font-black text-red-600 bg-red-200 px-2 py-0.5 rounded-full">Your Answer</span>;
                      }
                      if (wasSelected && isCorrectOption) {
                        style = "border-green-500 bg-green-100 text-green-800 font-semibold";
                        badge = <span className="ml-2 text-xs font-black text-green-700 bg-green-200 px-2 py-0.5 rounded-full">✓ Your Answer</span>;
                      }

                      return (
                        <div key={option.id} className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 text-sm ${style}`}>
                          <span>{option.text}</span>
                          {badge}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Bottom actions */}
      <div className="flex gap-4 justify-center pb-6">
        <Button
          variant={"green"}
          className="px-8 py-5 font-bold text-white text-lg rounded-xl"
          onClick={() => router.push("/quiz/setup/" + selectedQuiz?.id)}
        >
          {play} Play Again
        </Button>
        <Button
          variant={"blue"}
          className="px-8 py-5 font-bold text-white text-lg rounded-xl"
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </div>

    </div>
  );
}

export default page;
