export interface QuizAttempt {
  id: string;
  name: string;
  mobile: string;
  email?: string;
  score: number;
  timeTakenMs: number;
  completedAt: number;
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer: 'A' | 'B' | 'C' | 'D';
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
}

export type Screen = 'start' | 'form' | 'quiz' | 'score' | 'leaderboard';
