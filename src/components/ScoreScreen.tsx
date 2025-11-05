import { QuizAttempt } from '../types/quiz';
import { formatTime, getRank } from '../utils/storage';
import { useEffect, useState } from 'react';

interface ScoreScreenProps {
  attempt: QuizAttempt;
  attemptId: string;
  onViewLeaderboard: () => void;
  onRetakeQuiz: () => void;
  onBackToHome?: () => void;
}

function getScoreMessage(score: number): { bold: string; normal: string; extra?: string } {
  if (score === 6) {
    return {
      bold: "You're a Digital Safety Pro!",
      normal: "You've mastered the art of staying safe online. Your knowledge is a powerful tool."
    };
  } else if (score === 4 || score === 5) {
    return {
      bold: "So Close to Being a Pro!",
      normal: "Your vigilance is commendable. A few more simple steps and you can secure your digital life completely."
    };
  } else {
    return {
      bold: "Time to level up your skills!",
      normal: "It's easy to get caught off guard by scams, but you have the power to protect yourself.",
      extra: "Visit phonepe.com/trust-and-safety to learn more."
    };
  }
}

function getRankSuffix(rank: number): string {
  if (rank % 100 >= 11 && rank % 100 <= 13) {
    return 'th';
  }
  switch (rank % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

export default function ScoreScreen({ attempt, attemptId, onViewLeaderboard, onRetakeQuiz, onBackToHome }: ScoreScreenProps) {
  const [rank, setRank] = useState<number>(0);
  const scoreMessage = getScoreMessage(attempt.score);

  useEffect(() => {
    const fetchRank = async () => {
      const userRank = await getRank(attemptId);
      setRank(userRank);
    };
    fetchRank();
  }, [attemptId]);

  return (
    <div className="min-h-screen p-6 flex items-center justify-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/bg4.png)' }}>
      {/* Home Button */}
      {onBackToHome && (
        <button
          onClick={onBackToHome}
          className="absolute top-12 left-12  hover:scale-110 transition-transform"
        >
          <img src="/home.png" alt="Home" className="w-16 h-16" />
        </button>
      )}

      <div className="w-full max-w-2xl text-center ">
        {/* Score */}
        <div className="mb-8">
          <h1 className="text-7xl font-bold text-[#8559B7] mb-4 " style={{ fontFamily: 'extrabold' }}>
            Score : {attempt.score}/6
          </h1>
        </div>

        {/* Time */}
        <div className="mb-12">
          <p className="text-4xl font-bold text-black">
            Time : {formatTime(attempt.timeTakenMs)}
          </p>
        </div>

        {/* Message */}
        <div className=" ">
          <p className="text-xl text-black leading-relaxed mb-16">
            <span className="font-bold text-3xl ">Hi {attempt.name}, {scoreMessage.bold}</span>
            <br />
            {scoreMessage.normal}
            {scoreMessage.extra && (
              <>
                <br />
                {scoreMessage.extra}
              </>
            )}
          </p>
        </div>

        {/* Rank */}
        {attempt.score === 6 && (
          <div className="mb-16">
            <p className="text-4xl  text-[#8559B7]" style={{ fontFamily: 'extrabold' }}>
              You are currently at {rank > 0 ? `${rank}${getRankSuffix(rank)}` : '-'} Rank.
            </p>
          </div>
        )}

        {/* View Leaderboard Button */}
        <div className="flex justify-center">
          <button
            onClick={onViewLeaderboard}
            className="px-16 py-5 bg-[#5F259D] text-white text-xl font-bold hover:bg-[#4a1d7a] transition-all hover:scale-105"
            style={{ borderRadius: '200px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
          >
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}
