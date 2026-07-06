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

  // Nota reemplazar con Api Call
  var stats = [{ label: 'Miembros', value: '550', icon: Users}];
  
  try {
    stats.push({ label: 'Escrituras', value: '75' /*Hacer API call*/, icon: FileText});
  }
  catch {
    console.log("Error al intentar poblar el shortcut de Escrituras");
  }

  try {
    stats.push({ label: 'Eventos', value: '15' /*Hacer API call*/, icon: Calendar});
  }
  catch {
    console.log("Error al intentar ponlar el shortcut de Eventos");
  }

  const recentThreads = [
    { title: 'Script de Fang Gu', author: 'A2', date: 'Ayer', id: 1 },
    { title: 'Como jugar Acróbata de forma (no) óptima', author: 'A3', date: '3 días', id: 2 },
    { title: 'Bienvenida a los nuevos iniciados', author: 'A1', date: 'Hace 2 meses', id: 3 },
  ];

  const quickActions = [
    { label: 'Ir al Atrio', icon: MessageSquare, path: '/atrio', desc: 'Participa en las discusiones' },
    { label: 'Explorar Grimorio', icon: BookOpen, path: '/grimorio', desc: 'Consulta los conocimientos' },
    { label: 'Ver Calendario', icon: Calendar, path: '/calendario', desc: 'No te pierdas los eventos' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner */}
      <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <img
          src="/profile_banner_wide.jpg"   // or any other banner
          alt="Inicio"
          className="w-full h-full object-cover object-center grayscale-[0.5] opacity-80"
          onError={(e) => {
            // Fallback if image fails to load
            (e.target as HTMLImageElement).style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) {
              parent.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)';
            }
          }}
        />

        <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
          <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">
            Bienvenido a La Secta
          </h2>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-5xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
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
                to="/atrio"
                className="border border-outline-ghost hover:bg-surface-low text-on-surface px-4 py-2 rounded text-sm font-medium transition"
              >
                Explorar
              </Link>
            </div>
          </div>

          {/* Two-column layout: Recent Threads + Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Threads */}
            <div className="bg-surface-low border border-outline-ghost p-4 rounded shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-display text-theme-main flex items-center gap-2">
                  <MessageSquare size={18} />
                  Últimos hilos
                </h4>
                <Link to="/atrio" className="text-theme-main hover:text-theme-main/80 text-sm flex items-center gap-1">
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
                      to={`/atrio/${thread.id}`}
                      className="text-theme-main hover:text-theme-main/80 text-sm transition"
                    >
                      Leer
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="bg-surface-low border border-outline-ghost p-4 rounded shadow-md">
              <h4 className="text-lg font-display text-theme-main flex items-center gap-2 mb-3">
                <MapPin size={18} />
                Acceso rápido
              </h4>
              <div className="space-y-3">
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

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-display text-theme-main flex items-center gap-2">
                <Calendar size={18} />
                Próximos eventos
              </h4>
              <Link to="/calendario" className="text-theme-main hover:text-theme-main/80 text-sm flex items-center gap-1">
                Ver calendario <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-surface-low border border-outline-ghost p-3 rounded shadow-sm">
                <p className="text-on-surface font-medium">Ceremonia de solsticio</p>
                <p className="text-sm text-on-surface-muted">21 de junio • 20:00</p>
              </div>
              <div className="bg-surface-low border border-outline-ghost p-3 rounded shadow-sm">
                <p className="text-on-surface font-medium">Estudio del grimorio</p>
                <p className="text-sm text-on-surface-muted">25 de junio • 18:30</p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-2xl font-display text-theme-main border-b border-outline-ghost pb-2 mb-6"></div>
            <div className="flex flex-wrap -mx-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 px-2 min-w-[150px] mb-4"
                >
                  <div className="bg-surface-low border border-outline-ghost p-4 rounded shadow-md flex items-center gap-3 hover:border-theme-main transition-colors group w-full h-full">
                    <div className="text-theme-main bg-theme-container/20 p-2 rounded group-hover:scale-110 transition">
                      <stat.icon size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-display text-on-surface">{stat.value}</div>
                      <div className="text-sm text-on-surface-muted">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Homepage;