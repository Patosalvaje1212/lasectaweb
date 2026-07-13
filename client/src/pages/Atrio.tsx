// client/src/pages/Homepage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  MessageSquare,
  Calendar,
  BookOpen,
  FileText,
  MapPin,
  ArrowRight,
} from 'lucide-react';

const Homepage: React.FC = () => {
  // ----- Mock data (replace with real API calls later) -----
  const stats = [
    { label: 'Miembros', value: '550', icon: Users },
    { label: 'Escrituras', value: '75', icon: FileText },
    { label: 'Eventos', value: '15', icon: Calendar },
  ];

  const recentThreads = [
    { title: 'Script de Fang Gu', author: 'A2', date: 'Ayer', id: 1 },
    { title: 'Como jugar Acróbata de forma (no) óptima', author: 'A3', date: '3 días', id: 2 },
    { title: 'Bienvenida a los nuevos iniciados', author: 'A1', date: 'Hace 2 meses', id: 3 },
  ];

  const quickActions = [
    { label: 'Ir a la Plaza', icon: MessageSquare, path: '/plaza', desc: 'Participa en las discusiones' },
    { label: 'Explorar Grimorio', icon: BookOpen, path: '/grimorio', desc: 'Consulta los conocimientos' },
    { label: 'Ver Calendario', icon: Calendar, path: '/calendario', desc: 'No te pierdas los eventos' },
  ];

  // ----- Mini calendar logic -----
  const today = new Date();
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });

  // Day names (3-letter) for each column
  const dayNames = weekDays.map(d => 
    ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'][d.getDay()]
  );

  // Mock game schedule: offsets from today (0 = today)
  const gameOffsets = [0, 3, 5]; // e.g., tomorrow, +3 days, +5 days
  const hasGame = (date: Date) => {
    const diff = Math.floor((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return gameOffsets.includes(diff);
  };

  // Today's games (mock)
  const todayGames = [
    { title: 'Partida de Fang Gu', time: '20:00', players: '8/12' },
    { title: 'Torneo de Acróbata', time: '18:30', players: '6/8' },
  ];
  const hasTodayGames = todayGames.length > 0;

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <img
          src="/profile_banner_wide.jpg"
          alt="Inicio"
          className="w-full h-full object-cover object-center grayscale-[0.5] opacity-80"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) parent.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)';
          }}
        />

        <div className="absolute bottom-12 left-0 right-0 w-full max-w-7xl mx-auto px-8 z-20">
          <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">
            Bienvenido a La Secta
          </h2>
        </div>
      </div>

      {/* Main content area: flex container with wider max width */}
      <div className="max-w-7xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* ---- LEFT: Main Card ---- */}
          <div className="flex-1 min-w-0">
            <div className="bg-surface border border-outline-ghost p-10 rounded shadow-2xl relative space-y-8">

              {/* Intro text */}
              <div>
                <p className="text-on-surface-muted text-lg font-body leading-relaxed">
                  El lugar donde los elegidos comparten conocimiento y forjan su destino.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    to="/unete"
                    className="bg-theme-main hover:bg-theme-main/80 text-on-surface px-4 py-2 rounded text-sm font-medium transition"
                  >
                    Unirse ahora
                  </Link>
                  <Link
                    to="/plaza"
                    className="border border-outline-ghost hover:bg-surface-low text-on-surface px-4 py-2 rounded text-sm font-medium transition"
                  >
                    Explorar
                  </Link>
                </div>
              </div>

              {/* ===== NEW: Próximas partidas (mini calendar + today's games) ===== */}
              <div className="bg-surface-low border border-outline-ghost p-4 rounded shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-display text-theme-main flex items-center gap-2">
                    <Calendar size={18} /> Próximas partidas
                  </h4>
                  <Link to="/calendario" className="text-theme-main hover:text-theme-main/80 text-sm flex items-center gap-1">
                    Ver calendario completo <ArrowRight size={14} />
                  </Link>
                </div>
                <ul className="divide-y divide-outline-ghost">

                  {/* Big Box: Games for Today */}
                  <li className="py-3 ">
                    <h5 className="text-md font-display text-theme-main mb-2 flex items-center gap-2">
                      Programadas para Hoy
                    </h5>
                    {hasTodayGames ? (
                      <div className="space-y-2">
                        {todayGames.map((game, idx) => (
                          <div
                            key={idx}
                            className="flex flex-wrap items-center justify-between bg-background p-3 rounded border border-outline-ghost"
                          >
                            <div>
                              <p className="text-on-surface font-medium">{game.title}</p>
                              <p className="text-sm text-on-surface-muted">{game.time} • Jugadores: {game.players}</p>
                            </div>
                            <Link
                              to="/plaza"
                              className="text-theme-main hover:text-theme-main/80 text-sm transition flex items-center gap-1"
                            >
                              Unirse <ArrowRight size={14} />
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-on-surface-muted text-sm italic">No hay partidas programadas para hoy.</p>
                    )}
                  </li>

                  {/* Mini Calendar (current week) */}
                  <li className="py-3 ">
                    <h5 className="text-md font-display text-theme-main mb-2 flex items-center gap-2">
                      Durante esta semana
                    </h5>
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {dayNames.map((day) => (
                        <div key={day} className="text-xs font-display text-on-surface-variant uppercase">
                          {day}
                        </div>
                      ))}
                      {weekDays.map((date, idx) => {
                        const isToday = date.toDateString() === today.toDateString();
                        const hasGameToday = hasGame(date);
                        return (
                          <div
                            key={idx}
                            className={`p-2 rounded transition-colors ${
                              isToday ? 'border' : ''
                            } ${hasGameToday ? 'bg-theme-container/30 hover:bg-theme-container/50 cursor-pointer' : ''}`}
                          >
                            <div className="text-sm font-display text-on-surface">{date.getDate()}</div>
                            {hasGameToday && (
                              <div className="w-1.5 h-1.5 mx-auto mt-0.5 rounded-full bg-theme-main"></div>
                            )}
                            {isToday ? <span>Hoy</span>: ''}
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-2 flex justify-center gap-4 text-xs text-on-surface-muted">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-theme-main"></span> Partida programada
                      </span>
                    </div>
                  </li>
                </ul>

              </div>

              {/* Recent Threads */}
              <div className="bg-surface-low border border-outline-ghost p-4 rounded shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-display text-theme-main flex items-center gap-2">
                    <MessageSquare size={18} /> Últimos hilos
                  </h4>
                  <Link to="/plaza" className="text-theme-main hover:text-theme-main/80 text-sm flex items-center gap-1">
                    Ver todos <ArrowRight size={14} />
                  </Link>
                </div>
                <ul className="divide-y divide-outline-ghost">
                  {recentThreads.map((thread) => (
                    <li key={thread.id} className="py-3 flex justify-between items-center">
                      <div>
                        <p className="text-on-surface font-medium">{thread.title}</p>
                        <p className="text-sm text-on-surface-muted">
                          por {thread.author} • {thread.date}
                        </p>
                      </div>
                      <Link
                        to={`/plaza/${thread.id}`}
                        className="text-theme-main hover:text-theme-main/80 text-sm transition"
                      >
                        Leer
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Actions */}
              <div>
                <h4 className="text-lg font-display text-theme-main flex items-center gap-2 mb-3">
                  <MapPin size={18} /> Acceso rápido
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.path}
                      to={action.path}
                      className="flex items-center gap-3 p-3 rounded bg-background hover:bg-surface-low border border-outline-ghost hover:border-theme-main transition group"
                    >
                      <action.icon size={18} className="text-theme-main group-hover:scale-110 transition" />
                      <div>
                        <p className="text-on-surface font-medium">{action.label}</p>
                        <p className="text-sm text-on-surface-muted">{action.desc}</p>
                      </div>
                      <ArrowRight size={16} className="ml-auto text-on-surface-variant group-hover:text-theme-main transition" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ---- RIGHT: Floating Stats Card ---- */}
          <div className="md:w-72 flex-shrink-0 md:sticky md:top-34 self-start w-full">
            <div className="bg-surface border border-outline-ghost p-4 md:p-6 rounded shadow-2xl space-y-4">
              <h3 className="text-xl md:text-2xl font-display text-theme-main border-b border-outline-ghost pb-2">
                Estadísticas
              </h3>
              <div className="flex flex-row flex-wrap gap-3 md:flex-col md:gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex-1 min-w-[80px] md:min-w-full bg-surface-low border border-outline-ghost p-3 rounded shadow-md flex items-center gap-3 hover:border-theme-main transition-colors group"
                  >
                    <div className="text-theme-main bg-theme-container/20 p-2 rounded group-hover:scale-110 transition">
                      <stat.icon size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-display text-on-surface">{stat.value}</div>
                      <div className="text-sm text-on-surface-muted">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;