"use client";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/globalContext";
import { IOption, IQuestion, IResponse } from "@/types/types";
import { flag, next } from "@/utils/Icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function page() {
  const {
    selectedQuiz,
    quizSetup,
    setQuizSetup,
    setQuizResponses,
    filteredQuestions,
  } = useGlobalContext();
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [activeQuestion, setActiveQuestion] = React.useState(null) as any;
  const [responses, setResponses] = React.useState<IResponse[]>([]);
  const [shuffledOptions, setShuffledOptions] = React.useState<IOption[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = React.useState<IQuestion[]>(
    []
  );

  if (!selectedQuiz) {
    router.push("/");
    return null;
  }

  // shuffle questions when the quiz is started
  useEffect(() => {
    const allQuestions = filteredQuestions.slice(0, quizSetup?.questionCount);

    setShuffledQuestions(shuffleArray([...allQuestions]));
  }, [selectedQuiz, quizSetup]);

  // suffle options when the active question changes
  useEffect(() => {
    if (shuffledQuestions[currentIndex]) {
      // shuffle options for the current question
      setShuffledOptions(
        shuffleArray([...shuffledQuestions[currentIndex].options])
      );
    }
  }, [shuffledQuestions, currentIndex]);

  // Fisher-Yates Shuffle Algorithm
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; --i) {
      // generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));

      // swap elements --> destructuring assignment
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  const handleActiveQuestion = (option: any) => {
    if (!shuffledQuestions[currentIndex]) return;

    const response = {
      questionId: shuffledQuestions[currentIndex].id,
      optionId: option.id,
      isCorrect: option.isCorrect,
    };

    setResponses((prev) => {
      // check if the response already exists
      const existingIndex = prev.findIndex((res) => {
        return res.questionId === response.questionId;
      });

      // update the response if it exists

      if (existingIndex !== -1) {
        // update the response
        const updatedResponses = [...prev];
        updatedResponses[existingIndex] = response;

        return updatedResponses;
      } else {
        return [...prev, response];
      }
    });

    // set the active question
    setActiveQuestion(option);
  };

  const handleNextQuestion = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);

      // reset the active question
      setActiveQuestion(null);
    } else {
      router.push("/quiz/results");
    }
  };

  const handleFinishQuiz = async () => {
    setQuizResponses(responses);

    const score = responses.filter((res) => res.isCorrect).length;

    try {
      const res = await axios.post("/api/user/quiz/finish", {
        categoryId: selectedQuiz.categoryId,
        quizId: selectedQuiz.id,
        score,
        responses,
      });

      console.log("Quiz finished:", res.data);
    } catch (error) {
      console.log("Error finishing quiz:", error);
    }

    setQuizSetup({
      questionCount: 1,
      category: null,
      difficulty: null,
    });

    router.push("/results");
  };

  return (
    // Full-screen overlay — hides header, footer, and page content completely
    <div className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden">

      {/* Top bar: progress */}
      <div className="shrink-0 px-8 py-4 border-b-2 bg-white flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-black text-sm leading-none">O</span>
          </div>
          <span className="font-black text-gray-700 text-sm">{selectedQuiz.title}</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Progress bar */}
          <div className="w-40 h-2 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-indigo-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / shuffledQuestions.length) * 100}%` }}
            />
          </div>
          <span className="text-sm font-bold text-gray-500 whitespace-nowrap">
            {currentIndex + 1} / {shuffledQuestions.length}
          </span>
        </div>
      </div>

      {/* Scrollable question area */}
      <div className="flex-1 overflow-y-auto px-8 py-8 max-w-3xl mx-auto w-full">
        {shuffledQuestions[currentIndex] ? (
          <div className="space-y-8">
            <h1 className="text-3xl font-black text-gray-900 text-center leading-snug">
              {shuffledQuestions[currentIndex].text}
            </h1>
            <div className="space-y-3">
              {shuffledOptions.map((option, index) => (
                <button
                  key={index}
                  className={`w-full py-4 px-6 text-left border-2 text-base font-semibold rounded-xl
                    hover:bg-gray-50 transition-all duration-200
                    ${option.text === activeQuestion?.text
                      ? "bg-green-50 border-green-500 shadow-[0_.3rem_0_0_#22c55e] hover:bg-green-50"
                      : "bg-white border-gray-200 shadow-[0_.2rem_0_0_rgba(0,0,0,0.08)]"
                    }`}
                  onClick={() => handleActiveQuestion(option as IOption)}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-black shrink-0
                      ${option.text === activeQuestion?.text ? "border-green-500 bg-green-500 text-white" : "border-gray-300 text-gray-400"}`}>
                      {["A","B","C","D"][index]}
                    </span>
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-lg text-center text-gray-500">No questions found for this quiz</p>
        )}
      </div>

      {/* Bottom action bar */}
      <div className="shrink-0 px-8 py-5 border-t-2 bg-white flex items-center justify-center">
        <Button
          className="px-12 py-5 font-bold text-white text-lg rounded-xl min-w-[200px]"
          variant={"green"}
          onClick={() => {
            if (currentIndex < shuffledQuestions.length - 1) {
              if (activeQuestion?.id) {
                handleNextQuestion();
              } else {
                const sound = new Audio("/sounds/error.mp3");
                sound.play();
                toast.error("Please select an option to continue");
              }
            } else {
              if (activeQuestion?.id) {
                handleFinishQuiz();
              } else {
                const sound = new Audio("/sounds/error.mp3");
                sound.play();
                toast.error("Please select an option to continue");
              }
            }
          }}
        >
          {currentIndex < shuffledQuestions.length - 1 ? (
            <span className="flex items-center gap-2">{next} Next</span>
          ) : (
            <span className="flex items-center gap-2">{flag} Finish</span>
          )}
        </Button>
      </div>

    </div>
  );
}

export default page;
