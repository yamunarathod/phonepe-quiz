import { QuizAttempt } from '../types/quiz';
import { supabase } from '../lib/supabase';

let cachedLeaderboard: QuizAttempt[] = [];
let cacheTime: number = 0;
const CACHE_DURATION = 5000; // 5 seconds

export async function getLeaderboard(): Promise<QuizAttempt[]> {
  // Return cache if still valid
  if (Date.now() - cacheTime < CACHE_DURATION) {
    return cachedLeaderboard;
  }

  try {
    const { data, error } = await supabase
      .from('quiz')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const attempts: QuizAttempt[] = (data || []).map((record) => ({
      id: record.id.toString(),
      name: record.name || '',
      mobile: record.phone?.toString() || '',
      email: record.email || undefined,
      score: record.score || 0,
      timeTakenMs: parseTimeToMs(record.time || '00:00:000'),
      completedAt: new Date(record.created_at).getTime(),
    }));

    cachedLeaderboard = attempts;
    cacheTime = Date.now();
    return attempts;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return cachedLeaderboard;
  }
}

export async function saveAttempt(attempt: QuizAttempt): Promise<string> {
  try {
    const { data, error } = await supabase
      .from('quiz')
      .insert({
        name: attempt.name,
        phone: parseInt(attempt.mobile),
        email: attempt.email || null,
        score: attempt.score,
        time: formatTime(attempt.timeTakenMs),
      })
      .select('id')
      .single();

    if (error) throw error;

    // Invalidate cache
    cacheTime = 0;

    return data.id.toString();
  } catch (error) {
    console.error('Error saving attempt:', error);
    throw error;
  }
}

export async function getSortedLeaderboard(): Promise<QuizAttempt[]> {
  const leaderboard = await getLeaderboard();
  return leaderboard.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.timeTakenMs - b.timeTakenMs;
  });
}

export async function getTopLeaderboard(limit: number = 10): Promise<QuizAttempt[]> {
  const sorted = await getSortedLeaderboard();
  // Filter for only perfect scores (6/6)
  const perfectScores = sorted.filter(attempt => attempt.score === 6);
  return perfectScores.slice(0, limit);
}

export async function getRank(attemptId: string): Promise<number> {
  const sorted = await getSortedLeaderboard();
  const index = sorted.findIndex(a => a.id === attemptId);
  return index === -1 ? -1 : index + 1;
}

export async function checkMobileExists(mobile: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('quiz')
      .select('phone')
      .eq('phone', parseInt(mobile))
      .limit(1);

    if (error) throw error;

    return data && data.length > 0;
  } catch (error) {
    console.error('Error checking mobile:', error);
    return false;
  }
}

function parseTimeToMs(timeString: string): number {
  const parts = timeString.split(':');
  if (parts.length !== 3) return 0;

  const minutes = parseInt(parts[0]) || 0;
  const seconds = parseInt(parts[1]) || 0;
  const milliseconds = parseInt(parts[2]) || 0;

  return minutes * 60000 + seconds * 1000 + milliseconds;
}

export function formatTime(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const ms = milliseconds % 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(ms).padStart(3, '0')}`;
}
