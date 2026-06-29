const Calendario = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <img src="/calendar_banner_wide.jpg" alt="Calendario" className="w-full h-full object-cover object-center grayscale-[0.5] opacity-80" />
          
          <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
            <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">El Calendario de Sacrificios</h2>
          </div>
        </div>
        
        <div className="max-w-5xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
          <div className="bg-surface border border-outline-ghost p-10 rounded shadow-2xl relative">
            <div className="mb-10 text-center">
              <p className="text-on-surface-muted text-lg italic font-body">Consulta las próximas noches de juego y los narradores al cargo.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card de Partida */}
              <div className="bg-surface-low border border-outline-ghost rounded p-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-theme-main"></div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-on-surface">Trouble Brewing</h3>
                    <p className="text-theme-main font-display text-sm">Edición para Principiantes</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-display text-on-surface">Hoy</p>
                    <p className="text-on-surface-muted text-sm">22:00h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-outline-ghost/50 pt-4 mt-4">
                  <div className="w-8 h-8 rounded-full bg-surface-highest border border-outline-ghost flex items-center justify-center overflow-hidden">
                    <img src="/avatar.png" alt="Storyteller" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-muted">Storyteller</p>
                    <p className="text-sm font-display text-on-surface">Alice</p>
                  </div>
                </div>
              </div>

              {/* Card de Partida 2 */}
              <div className="bg-surface-low border border-outline-ghost rounded p-6 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2 h-full bg-purple-800"></div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-on-surface">Sects & Violets</h3>
                    <p className="text-purple-400 font-display text-sm">Edición Intermedia</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-display text-on-surface">Mañana</p>
                    <p className="text-on-surface-muted text-sm">22:30h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t border-outline-ghost/50 pt-4 mt-4">
                  <div className="w-8 h-8 rounded-full bg-surface-highest border border-outline-ghost flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-surface flex items-center justify-center text-xs">?</div>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-muted">Storyteller</p>
                    <p className="text-sm font-display text-on-surface">Por definir</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Calendario;
