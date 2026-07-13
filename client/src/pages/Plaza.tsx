// client/src/pages/Plays.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, ArrowRight, Clock } from 'lucide-react';


interface PlayersPGame {
  id: number;
  name: string;
  order: number;
  max_players: number;
  player_count: number;
}

interface Game {
  id: number;
  name: string;
  slug: string;
  date: string;
  script_name: string;
  in_person: boolean;
  lists: PlayersPGame[];
}

const Plaza: React.FC = () => {
  const [plays, setPlays] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const CULT_SLUG = 'la-secta';

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`/vc/public/plays/cult/${CULT_SLUG}/pending/`);

        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data : Game[] = await response.json();
        console.log(data);

        setPlays(data);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch plays');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <div className="relative h-[35vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
          <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">
            Partidas Públicas
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
        <div className="bg-surface border border-outline-ghost p-10 rounded shadow-2xl relative space-y-6">
          {loading && (
            <div className="flex justify-center py-12">
              <div className="text-on-surface-muted">Cargando partidas...</div>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded">
              Error: {error}
            </div>
          )}

          {!loading && !error && plays.length === 0 && (
            <div className="text-center py-12">
              <p className="text-on-surface-muted text-lg">
                No hay partidas públicas disponibles en este momento.
              </p>
            </div>
          )}

          {!loading && !error && plays.length > 0 && (
            <div className="space-y-6">
              {plays.map((play) => (
                <div
                  key={play.id}
                  className="bg-surface-low border border-outline-ghost rounded shadow-md p-6 hover:border-theme-main transition-colors"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-display text-on-surface">
                        {play.name}
                      </h3>
                      <p className="text-sm text-on-surface-muted mt-1">
                        {play.script_name}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-on-surface-muted">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {formatDate(play.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {play.in_person ? 'Presencial' : 'Online'}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/plays/${play.slug}`}
                      className="flex items-center gap-1 text-theme-main hover:text-theme-main/80 text-sm font-medium transition whitespace-nowrap"
                    >
                      Ver detalles <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Lists (groups/teams) */}
                  {play.lists && play.lists.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-outline-ghost">
                      <h4 className="text-sm font-display text-theme-main mb-2">
                        Listas de jugadores
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {play.lists.map((list) => (
                          <div
                            key={list.id}
                            className="bg-background p-2 rounded border border-outline-ghost flex items-center justify-between text-sm"
                          >
                            <span className="text-on-surface">{list.name}</span>
                            <span className="text-on-surface-muted">
                              <Users size={14} className="inline mr-1" />
                              {list.player_count}/{list.max_players}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plaza;