import { Trophy, Play } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
  onViewLeaderboard: () => void;
}

export default function StartScreen({ onStart, onViewLeaderboard }: StartScreenProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(/bg1.png)' }}
    >
      <div className="w-full max-w-4xl">
        {/* ↓ moved buttons slightly higher by reducing margin-top */}
        <div className="flex items-center justify-center gap-24 mt-[32rem]">
          <button
            onClick={onViewLeaderboard}
            className="group inline-flex items-center gap-3 px-8 py-3 bg-[#5F259D] text-white text-3xl font-semibold hover:bg-[#4a1d7a] transition-all hover:scale-105"
            style={{ borderRadius: '60px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
          >
            Leaderboard
          </button>

          <button
            onClick={onStart}
            className="group inline-flex items-center gap-3 px-12 py-3 bg-[#5F259D] text-white text-3xl font-semibold hover:bg-[#4a1d7a] transition-all hover:scale-105"
            style={{ borderRadius: '60px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
