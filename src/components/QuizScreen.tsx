import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { Question } from '../data/questions';
import { UserAnswer } from '../types/quiz';
import { formatTime } from '../utils/storage';

interface QuizScreenProps {
  questions: Question[];
  onComplete: (answers: UserAnswer[], timeTakenMs: number) => void;
  onBackToHome?: () => void;
}

export default function QuizScreen({ questions, onComplete, onBackToHome }: QuizScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    if (!isTimerRunning) return;

    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 10);
    }, 10);

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const handleAnswerSelect = (answer: 'A' | 'B' | 'C' | 'D') => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    setIsTimerRunning(false);

    const isCorrect = answer === currentQuestion.correctAnswer;
    const userAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer: answer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect,
    };

    setAnswers([...answers, userAnswer]);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (isLastQuestion) {
      onComplete(answers, elapsedTime);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsTimerRunning(true);
    }
  };

  const getOptionClass = (option: 'A' | 'B' | 'C' | 'D') => {
    if (!selectedAnswer) {
      return 'bg-white hover:bg-[#E8F5E9] border-2 border-transparent';
    }

    if (option === currentQuestion.correctAnswer) {
      return 'bg-[#3BAF49] border-2 border-[#3BAF49] text-white';
    }

    if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
      return 'bg-[#D0312C] border-2 border-[#D0312C] text-white';
    }

    return 'bg-white border-2 border-transparent opacity-60';
  };

  // 🔼 Increased font size of option text (from text-xl → text-2xl)
  const renderOption = (option: 'A' | 'B' | 'C' | 'D', text: string) => {
    const optionLower = option.toLowerCase();

    return (
      <button
        className={`option-btn w-full max-w-[620px] mx-auto text-left px-6 py-2 transition-all ${getOptionClass(
          option
        )} ${!selectedAnswer ? 'cursor-pointer hover:scale-[1.02]' : 'cursor-default'}`}
        onClick={() => handleAnswerSelect(option)}
        disabled={selectedAnswer !== null}
        style={{
          borderRadius: '200px',
          boxShadow: '0 0 25px rgba(95, 37, 157, 0.35)',
        }}
      >
        <div className="flex items-center gap-6 justify-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-lg border-2 bg-[#B3E5FC] text-[#5F259D] border-dashed border-[#5F259D]">
            {optionLower}
          </div>
          <span className="flex-1 text-xl font-semibold text-[#5F259D] leading-snug text-left">
            {text}
          </span>
        </div>
      </button>
    );
  };

  return (
    <>
      {/* global rule: reduce font-size for all buttons except option-btn and next-btn */}
      <style>{`
        button:not(.option-btn):not(.next-btn) {
          font-size: 0.875rem; /* slightly smaller */
        }
      `}</style>

      <div
        className="min-h-screen p-6 flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: 'url(/bg3.png)' }}
      >
        {/* Home Button */}
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="other-btn absolute top-8 left-10 hover:scale-110 transition-transform z-50"
          >
            <img src="/home.png" alt="Home" className="w-16 h-16" />
          </button>
        )}

        {/* Clock */}
        <div className="absolute top-8 right-10 flex flex-col items-center">
          <div className="relative flex flex-col items-center w-28">
            <img
              src="/clock.png"
              alt="clock"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 object-contain"
              style={{ zIndex: 0, width: '95%', height: 'auto' }}
            />
            <div
              className="text-3xl font-bold text-[#5F259D] font-mono relative mt-6"
              style={{ zIndex: 1 }}
            >
              {Math.floor(elapsedTime / 1000)}
            </div>
            <div className="text-2xl mt-[-10%] text-[#5F259D] relative" style={{ zIndex: 1 }}>
              sec
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl px-6">
          {/* Question Number Badge */}
          <div className="flex justify-center mb-[-40px] relative z-10">
            <div className="w-20 h-20 rounded-full bg-[#B3E5FC] border-2 border-dashed border-[#5F259D] flex items-center justify-center">
              <span className="text-4xl font-bold text-[#5F259D]">{currentQuestionIndex + 1}</span>
            </div>
          </div>

          {/* Question Card */}
          <div
            className="bg-white px-10 pt-14 pb-8 mb-14"
            style={{ borderRadius: '200px', boxShadow: '0 0 25px rgba(95, 37, 157, 0.25)' }}
          >
            <h2
              className="text-3xl md:text-2xl font-bold text-[#5F259D] text-center leading-relaxed"
              style={{ fontFamily: 'extrabold' }}
            >
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options + Next Button Section */}
          <div className="mb-10 -mt-6">
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-6 justify-items-center">
              {renderOption('A', currentQuestion.optionA)}
              {renderOption('B', currentQuestion.optionB)}
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 justify-items-center">
              {renderOption('C', currentQuestion.optionC)}
              {renderOption('D', currentQuestion.optionD)}
            </div>

            {/* Next Button */}
            <div className="flex justify-center mt-10">
              <button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={`next-btn w-full max-w-[280px] mx-auto px-16 py-3 text-xl font-semibold transition-all ${
                  selectedAnswer
                    ? 'bg-[#5F259D] text-white hover:bg-[#4a1d7a] hover:scale-[1.02] cursor-pointer'
                    : 'bg-white text-[#5F259D] cursor-not-allowed opacity-60'
                }`}
                style={{
                  borderRadius: '200px',
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
                }}
              >
                {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
              </button>
            </div>
            {/* END Next Button */}
          </div>
        </div>
      </div>
    </>
  );
}
