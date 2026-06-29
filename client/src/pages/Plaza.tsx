const Plaza = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <img src="/profile_banner_wide.jpg" alt="La Plaza" className="w-full h-full object-cover object-center grayscale-[0.5] opacity-80" />
          
          <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
            <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">La Plaza</h2>
          </div>
        </div>
        
        <div className="max-w-5xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
          <div className="bg-surface border border-outline-ghost p-10 rounded shadow-2xl relative">
            <div className="mb-10 text-center">
              <p className="text-on-surface-muted text-lg italic font-body">El corazón de la web. Aquí debatimos, votamos y forjamos el futuro del Culto.</p>
            </div>

            <div className="space-y-10">
              {/* Propuestas en curso */}
              <section>
                <h3 className="text-3xl font-display text-theme-main border-b border-outline-ghost pb-2 mb-6">Propuestas en Curso</h3>
                <div className="bg-surface-low border border-outline-ghost rounded p-6 shadow-md mb-4">
                  <h4 className="text-xl font-display text-on-surface mb-2">Edicto #042: Ajuste en la elección de roles</h4>
                  <p className="text-on-surface-muted font-body mb-4">Sugerencia para implementar un sistema de veto de un rol por jugador antes de repartir las fichas en las partidas de más de 12 jugadores.</p>
                  
                  {/* Mockup de Votación */}
                  <div className="flex gap-4 mb-4">
                    <button className="flex-1 bg-surface-highest hover:bg-green-900/40 text-on-surface py-2 border border-outline-ghost rounded transition-colors">A Favor (12)</button>
                    <button className="flex-1 bg-surface-highest hover:bg-red-900/40 text-on-surface py-2 border border-outline-ghost rounded transition-colors">En Contra (3)</button>
                    <button className="flex-1 bg-transparent hover:bg-surface-highest text-on-surface-muted py-2 border border-outline-ghost rounded transition-colors">Abstención (5)</button>
                  </div>
                  
                  {/* Mockup de Comentarios */}
                  <div className="border-t border-outline-ghost/50 pt-4 mt-4">
                    <p className="text-sm text-theme-main font-display mb-2">Debate (2 comentarios)</p>
                    <div className="space-y-3">
                      <div className="bg-background p-3 rounded border border-outline-ghost/30">
                        <p className="text-xs text-on-surface-variant font-display mb-1">Cuentacuentos_X</p>
                        <p className="text-sm font-body text-on-surface">Me parece buena idea, así evitamos repetir siempre el mismo demonio.</p>
                      </div>
                      <div className="bg-background p-3 rounded border border-outline-ghost/30">
                        <p className="text-xs text-on-surface-variant font-display mb-1">AldeanoSospechoso</p>
                        <p className="text-sm font-body text-on-surface">Creo que ralentizará el inicio de las partidas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Historial de Edictos */}
              <section>
                <h3 className="text-3xl font-display text-theme-main border-b border-outline-ghost pb-2 mb-6">Historial de Edictos</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-surface-low border border-outline-ghost/50 p-4 rounded">
                    <span className="font-body text-on-surface">Edicto #041: Obligatoriedad de micro abierto en fase de día</span>
                    <span className="text-green-500/80 font-display text-sm border border-green-900 px-2 py-1 rounded">Aprobado</span>
                  </div>
                  <div className="flex justify-between items-center bg-surface-low border border-outline-ghost/50 p-4 rounded">
                    <span className="font-body text-on-surface text-on-surface-muted line-through">Edicto #040: Cambiar horario a las 23:00h</span>
                    <span className="text-red-500/80 font-display text-sm border border-red-900 px-2 py-1 rounded">Rechazado</span>
                  </div>
                </div>
              </section>
            </div>

          </div>
        </div>
      </div>
    );
  };
  
  export default Plaza;
