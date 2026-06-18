import { auth } from "@clerk/nextjs/server";
import React from "react";
import prisma from "@/utils/connect";
import { IQuiz } from "@/types/types";
import QuizCard from "@/components/quiz/QuizCard";
import Countdown from "@/components/Countdown";

export const dynamic = "force-dynamic";

async function page({ params }: any) {
  const { categoryId } = await params;

  if (!categoryId) return null;

  // Only run arcjet protection if a real key is configured
  if (
    process.env.ARCJET_KEY &&
    !process.env.ARCJET_KEY.includes("placeholder")
  ) {
    try {
      const { auth: clerkAuth } = await import("@clerk/nextjs/server");
      const { request } = await import("@arcjet/next");
      const { aj } = await import("@/lib/arcject");

      const { userId } = await clerkAuth();
      const req = await request();

      const decision = await aj.protect(req, {
        userId: userId ?? "",
        requested: 2,
      });

      if (decision.isDenied() && decision.reason.isRateLimit()) {
        const resetTime = decision.reason?.resetTime;

        if (!resetTime) {
          return (
            <div>
              <h1>Rate limit exceeded</h1>
            </div>
          );
        }

        const timeLeft = Math.max(
          Math.ceil(
            (new Date(resetTime).getTime() - Date.now()) / 1000
          ),
          0
        );

        return (
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-bold text-center text-red-400">
              Too many requests :(
            </h1>
            <p>You have exceeded the rate limit for this request.</p>
            <Countdown intitialTimeLeft={timeLeft} />
          </div>
        );
      }
    } catch {
      // Arcjet not configured — skip protection
    }
  }

  const quizzes = await prisma.quiz.findMany({
    where: { categoryId },
    include: {
      questions: {
        select: {
          id: true,
          text: true,
          difficulty: true,
          options: {
            select: {
              id: true,
              text: true,
              isCorrect: true,
            },
          },
        },
      },
    },
    orderBy: { id: "asc" },
  });

  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold">All Quizzes</h1>
      {quizzes.length > 0 ? (
        <div className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6">
          {quizzes.map((quiz: IQuiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl text-center mt-4">
          No quizzes found for this Category
        </h1>
      )}
    </div>
  );
}

export default page;
