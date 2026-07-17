// client/src/pages/Homepage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

import CalendarWidgets from '../components/CalendarWidget'

import {
  MessageSquare,
  Calendar,
  BookOpen,
  MapPin,
  ArrowRight,
  Satellite,
} from 'lucide-react';
import Cita from '../components/Cita';
import StatsWidget from '../components/StatsWidget';
import PageHeader from '../components/PageHeader';


const Atrio: React.FC = () => {
  /*
  const recentThreads = [
    { title: 'Script de Fang Gu', author: 'A2', date: 'Ayer', id: 1 },
    { title: 'Como jugar Acróbata de forma (no) óptima', author: 'A3', date: '3 días', id: 2 },
    { title: 'Bienvenida a los nuevos iniciados', author: 'A1', date: 'Hace 2 meses', id: 3 },
  ];
  */

  const quickActions = [
    { label: 'Ir a la Plaza', icon: MessageSquare, path: '/plaza', desc: 'Participa en las discusiones' },
    { label: 'Explorar Grimorio', icon: BookOpen, path: '/grimorio', desc: 'Consulta los conocimientos' },
    { label: 'Ver Calendario', icon: Calendar, path: '/calendario', desc: 'No te pierdas los eventos' },
  ]; 

  return (
    <div className="flex flex-col w-full">
      <PageHeader
              title="Atrio Principal"
              imageSrc="/profile_banner_wide.jpg"
              imageAlt="Dark Library"
              maxWidthClass="max-w-7xl"
            />

      <div className="max-w-7xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1 min-w-0">
            <div className="bg-surface border border-outline-ghost p-10 rounded shadow-2xl relative space-y-8">
              
              <Cita texto="Ven, siéntate al borde del abismo. Contaremos historias sobre los condenados, *y uno de nostros no mentirá al hacerlo*." />

              <div className="bg-surface border border-outline-ghost p-4 md:p-6 rounded shadow-2xl space-y-4">

                <h3 className="text-xl font-display text-theme-main mb-3">Bienvenido a la página oficial de La Secta</h3>
                <p className="text-on-surface text-base font-body leading-relaxed">
                  La próxima ejecución está a punto de comenzar. Tu asiento en la plaza te espera.
                </p>
                <div className="flex justify-end">
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/unete"
                      className="bg-theme-main/40 hover:bg-theme-container/40 text-on-surface px-4 py-2 rounded text-sm font-medium transition"
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
              </div>

              {/* Calendario */}
              <div className="bg-surface-low border border-outline-ghost p-4 rounded shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-display text-theme-main border-b flex items-center border-outline-ghost pb-2 gap-2">
                    <Calendar size={18} /> Próximos Rituales
                  </h4>

                  <Link to="/calendario" className="text-theme-main hover:text-theme-main/80 text-sm flex items-center gap-1">
                    Ver calendario completo <ArrowRight size={14} />
                  </Link>
                </div>
                <CalendarWidgets />

              </div>

              {/* Enlace a hilos de la plaza -- No funcional */}
              {/*
                <div className="bg-surface-low border border-outline-ghost p-4 rounded shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-display text-theme-main flex items-center gap-2">
                      <MessageSquare size={18} /> Últimas deliberaciones
                    </h4>
                    <Link to="/plaza" className="text-theme-main hover:text-theme-main/80 text-sm flex items-center gap-1">
                      Ver todos <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className="divide-y divide-outline-ghost">
                    
                    <div className="py-3 flex justify-between items-center">
                          <div>
                            <p className="text-on-surface font-medium">Sección en Construccion</p>
                          </div>
                    
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
                    
                    </div>
                  </div>
                </div>

              */}
              <div>
                <div className="bg-surface border border-outline-ghost p-4 md:p-6 rounded shadow-2xl space-y-4">
                  <h4 className="text-xl font-display text-theme-main border-b flex items-center border-outline-ghost pb-2 gap-2">
                    <Satellite size={18}/>Estadísticas
                  </h4>
                  <StatsWidget />
                  
                </div>
              </div>
            </div>
          </div>

            <div className="md:w-72 flex-shrink-0 md:sticky md:top-34 self-start w-full">
              <div className="bg-surface border border-outline-ghost p-4 md:p-6 rounded shadow-2xl space-y-4">
                <h4 className="text-lg font-display text-theme-main flex items-center gap-2 mb-3">
                  <MapPin size={18} /> Acceso rápido
                </h4>
                <div className="flex flex-row flex-wrap gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.path}
                      to={action.path}
                      className="flex items-center gap-3 p-3 rounded bg-background hover:bg-surface-low border border-outline-ghost hover:border-theme-main transition group flex-1 min-w-[200px]"
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
      </div>
    </div>
  );
};

export default Atrio;
