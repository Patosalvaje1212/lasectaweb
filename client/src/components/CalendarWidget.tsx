import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

import {
  CirclePlus
} from "lucide-react";


export interface PublicPlayListSchema {
  id: number;
  name: string;
  order: number;
  max_players: number | null;
  player_count: number;
}

export interface PublicPlaySchema {
  id: number;
  name: string;
  slug: string;
  date: string;
  script_name: string | null;
  in_person: boolean;
  lists: PublicPlayListSchema[];
}

const API_URL = `${import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api'}`;


async function fetchPendingPlays(): Promise<PublicPlaySchema[]> {
  const response = await fetch(`${API_URL}/villacuervos/plays/pending`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function getNextDays(startDate: Date, count: number): Date[] {
  return Array.from({ length: count }, (_, i) => {
    const day = new Date(startDate);
    day.setDate(day.getDate() + i);
    return day;
  });
}

function isSameDay(dateStr: string, target: Date): boolean {
  const d = new Date(dateStr);
  return (
    d.getFullYear() === target.getFullYear() &&
    d.getMonth() === target.getMonth() &&
    d.getDate() === target.getDate()
  );
}

function MiniCalendar({ plays, narrador }: { plays: PublicPlaySchema[], narrador:boolean }) {
  const days = getNextDays(new Date(), 8);

  const getWeekStart = (date: Date): Date => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = day === 0 ? 6 : day - 1; // to Monday
    d.setDate(d.getDate() - diff);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  // Group days by week (Monday start)
  const grouped: Record<string, Date[]> = {};
  days.forEach((day) => {
    const weekStart = getWeekStart(day);
    const key = weekStart.toISOString();
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(day);
  });

  const weekGroups = Object.values(grouped).sort(
    (a, b) => a[0].getTime() - b[0].getTime()
  );

  

  return (
    <div className="flex flex-wrap gap-2">
      {weekGroups.map((weekDays, idx) => (
        <div
          key={idx}
          className="flex flex-wrap gap-3 p-3 border border-outline-ghost rounded-lg bg-surface-low"
        >
          {weekDays.map((day, i) => {
            const todayGames = plays.filter((play) => isSameDay(play.date, day));
            const hasGame = todayGames.length > 0;
            
            const gameLink = todayGames.length == 1 ?
              `https://villacuervos.es/partidas/la-secta/${todayGames[0].id}/${todayGames[0].slug}` :
              'https://villacuervos.es/partidas/';

            const dayElement = (
              <div
                key={i}
                className={`rounded-lg p-3 text-center min-w-[80px] border ${
                  hasGame
                    ? 'bg-theme-container/20 border-theme-main cursor-pointer hover:bg-theme-container/60'
                    : 'bg-surface-low border-outline-ghost'
                }`}
              >
                <div className="text-xs text-on-surface-muted uppercase">
                  {day.toLocaleDateString('es-ES', { weekday: 'short' })}
                </div>
                <div className="text-xl font-bold text-on-surface my-1">
                  {day.getDate()}
                </div>
                {hasGame && (
                  <div className="w-2 h-2 rounded-full bg-theme-main mx-auto mt-2" />
                )}
                
              </div>
            );


            return (
              <div key={i} className="flex flex-col items-center justify-between h-full">
                {
                  hasGame ? (
                    <Link to={gameLink} key={i} target="_blank" title="Ver Partida">
                    {dayElement}
                    </Link>
                  )
                  : ( dayElement )
                }
                {narrador && (
                  <Link to="/calendario" title="Añadir nueva partida" className="mt-4 text-theme-main/80 hover:text-theme-main">
                    
                    <CirclePlus size={24}/>
                    
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      ))}
      <div className="w-full flex justify-center">
      <div className="flex items-center text-medium text-on-surface-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-theme-main inline-block" />
          <span>Hay partida</span>
        </span>
      </div>
    </div>
    </div>

  );
}

// --- Container: fetches data and renders the calendar ---
export default function CalendarWidget() {
  const [plays, setPlays] = useState<PublicPlaySchema[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { user } = useAuth();

  const isNarrador = (user?.roles || []).includes('narrador') || (user?.roles || []).includes('admin');

  useEffect(() => {
    fetchPendingPlays()
      .then((data) => setPlays(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading calendar…</p>;
  if (error) return <p>Error: {error}</p>;

  return <MiniCalendar plays={plays} narrador={isNarrador}/>;
}
