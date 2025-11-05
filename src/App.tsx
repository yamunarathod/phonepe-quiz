import { useState } from 'react';
import StartScreen from './components/StartScreen';
import FormScreen from './components/FormScreen';
import QuizScreen from './components/QuizScreen';
import ScoreScreen from './components/ScoreScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import { getRandomQuestions, Question } from './data/questions';
import { Screen, UserAnswer, QuizAttempt } from './types/quiz';
import { saveAttempt, checkMobileExists } from './utils/storage';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('start');
  const [userName, setUserName] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [userEmail, setUserEmail] = useState<string | undefined>();
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentAttempt, setCurrentAttempt] = useState<QuizAttempt | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStartQuiz = () => {
    setCurrentScreen('form');
  };

  const handleFormSubmit = async (name: string, mobile: string, email?: string) => {
    // Check if mobile number already exists
    const mobileExists = await checkMobileExists(mobile);

    if (mobileExists) {
      throw new Error('This mobile number has already been used. Each person can only play once.');
    }

    setUserName(name);
    setUserMobile(mobile);
    setUserEmail(email);
    setQuizQuestions(getRandomQuestions(6));
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = async (answers: UserAnswer[], timeTakenMs: number) => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    const score = answers.filter((a) => a.isCorrect).length;

    const attempt: QuizAttempt = {
      id: `${Date.now()}-${Math.random()}`,
      name: userName,
      mobile: userMobile,
      email: userEmail,
      score,
      timeTakenMs,
      completedAt: Date.now(),
    };

    try {
      const dbId = await saveAttempt(attempt);
      const attemptWithDbId = { ...attempt, id: dbId };
      setCurrentAttempt(attemptWithDbId);
      setCurrentScreen('score');
    } catch (error) {
      console.error('Failed to save attempt:', error);
      // Still show score screen even if save fails
      setCurrentAttempt(attempt);
      setCurrentScreen('score');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleViewLeaderboard = () => {
    setCurrentScreen('leaderboard');
  };

  const handleBackToHome = () => {
    setCurrentScreen('start');
    setCurrentAttempt(null);
  };

  const handleRetakeQuiz = () => {
    setCurrentScreen('form');
    setCurrentAttempt(null);
  };

  return (
    <>
      {currentScreen === 'start' && <StartScreen onStart={handleStartQuiz} onViewLeaderboard={handleViewLeaderboard} />}

      {currentScreen === 'form' && <FormScreen onStartQuiz={handleFormSubmit} onBackToHome={handleBackToHome} />}

      {currentScreen === 'quiz' && (
        <QuizScreen questions={quizQuestions} onComplete={handleQuizComplete} onBackToHome={handleBackToHome} />
      )}

      {currentScreen === 'score' && currentAttempt && (
        <ScoreScreen
          attempt={currentAttempt}
          attemptId={currentAttempt.id}
          onViewLeaderboard={handleViewLeaderboard}
          onRetakeQuiz={handleRetakeQuiz}
          onBackToHome={handleBackToHome}
        />
      )}

      {currentScreen === 'leaderboard' && <LeaderboardScreen onBack={handleBackToHome} />}
    </>
  );
}

export default App;
