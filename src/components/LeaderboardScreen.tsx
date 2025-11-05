  import { getTopLeaderboard, formatTime } from '../utils/storage';
  import { useEffect, useState } from 'react';
  import { QuizAttempt } from '../types/quiz';

  interface LeaderboardScreenProps {
    onBack: () => void;
  }

  export default function LeaderboardScreen({ onBack }: LeaderboardScreenProps) {
    const [leaderboard, setLeaderboard] = useState<QuizAttempt[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchLeaderboard = async () => {
        setLoading(true);
        const data = await getTopLeaderboard(50);
        setLeaderboard(data);
        setLoading(false);
      };
      fetchLeaderboard();
    }, []);

    return (
      <div className="min-h-screen p-6 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg5.png)' }}>
        <button
          onClick={onBack}
          className="absolute top-12 left-12 hover:scale-110 transition-transform"
        >
          <img src="/home.png" alt="Home" className="w-16 h-16" />
        </button>

        <div className="max-w-7xl mx-auto mt-52">
          

          {/* Header Row */}
          <div className="grid grid-cols-[150px_1fr_220px] gap-4 mb-6 px-8">
            <div className="text-2xl font-bold text-black">Rank</div>
            <div className="text-2xl font-bold text-black">Name</div>
            <div className="text-2xl font-bold text-black text-right">Time <span className='font-normal text-[20px]'>(in minutes)</span> </div>
          </div>

          {/* Leaderboard Entries */}
          <div className="space-y-2">
            {loading ? (
              <div className="text-center py-16">
                <p className="text-black text-2xl">Loading leaderboard...</p>
              </div>
            ) : leaderboard.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-black text-2xl mb-2">No attempts yet</p>
                <p className="text-black text-xl">Be the first to take the quiz!</p>
              </div>
            ) : (
              leaderboard.slice(0, 10).map((attempt, index) => (
                <div
                  key={attempt.id}
                  className="flex items-center"
                >
                  {/* Rank Badge */}
                  <div
                    className="w-36 h-14 flex items-center justify-center text-3xl font-bold text-white bg-[#B98BB8] border-2 border-white shadow-lg relative z-10"
                    style={{ borderRadius: '200px' }}
                  >
                    {index + 1}
                  </div>

                  {/* Name Section */}
                  <div className="flex-1 h-14 bg-black/10 flex items-center px-16 text-2xl font-semibold text-[#5F259D] border-y-2 border-white shadow-lg -mx-8">
                    {attempt.name}
                  </div>

                  {/* Time Section */}
                  <div
                    className="w-56 h-14 bg-white flex items-center justify-center text-2xl font-bold text-[#B98BB8] border-2 border-white shadow-lg relative z-10"
                    style={{ borderRadius: '200px' }}
                  >
                    {formatTime(attempt.timeTakenMs)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
