const Muro = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <img src="/avatar_wide.jpg" alt="Muro de los Caídos" className="w-full h-full object-cover object-center grayscale-[0.5] opacity-80" />
          
          <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
            <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">El Muro de los Caídos</h2>
          </div>
        </div>
        
        <div className="max-w-5xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
          <div className="bg-surface border border-outline-ghost p-10 rounded shadow-2xl relative">
            
            <div className="mb-12">
                <h3 className="text-3xl font-display text-theme-main border-b border-outline-ghost pb-2 mb-6">Crónicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <article className="bg-surface-low border border-outline-ghost p-6 rounded shadow-md group cursor-pointer hover:border-theme-main transition-colors">
                        <span className="text-xs font-display text-theme-main mb-2 block">12 de Octubre, 2026</span>
                        <h4 className="text-xl font-display text-on-surface mb-2 group-hover:text-theme-main transition-colors">La gran purga del Empeñador</h4>
                        <p className="text-on-surface-muted font-body text-sm line-clamp-3">Nadie esperaba que el Empeñador (Tinker) consiguiera convencer a todo el pueblo de que él era el Santo. Tras la ejecución, el demonio solo tuvo que sentarse a mirar cómo el caos se desataba...</p>
                    </article>
                    <article className="bg-surface-low border border-outline-ghost p-6 rounded shadow-md group cursor-pointer hover:border-theme-main transition-colors">
                        <span className="text-xs font-display text-theme-main mb-2 block">05 de Octubre, 2026</span>
                        <h4 className="text-xl font-display text-on-surface mb-2 group-hover:text-theme-main transition-colors">Victoria en el último minuto</h4>
                        <p className="text-on-surface-muted font-body text-sm line-clamp-3">Quedaban 3 vivos. El Cuervo, el Monje y el Imp. El Cuervo había perdido la memoria y el Monje no confiaba en nadie. La tensión se podía cortar con un cuchillo...</p>
                    </article>
                </div>
            </div>

            <div>
                <h3 className="text-3xl font-display text-theme-main border-b border-outline-ghost pb-2 mb-6">Hall of Fame</h3>
                <div className="bg-surface-low border border-outline-ghost p-6 rounded shadow-md">
                    <p className="text-on-surface-muted font-body italic mb-6">Menciones honoríficas a las jugadas maestras de la semana.</p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-theme-main bg-background overflow-hidden flex items-center justify-center">
                                <span className="font-display text-theme-main">#1</span>
                            </div>
                            <div>
                                <p className="font-display text-on-surface text-lg">El Ilusionista Supremo</p>
                                <p className="font-body text-on-surface-muted text-sm">Por lograr colar un farol de 3 días seguidos siendo el Envenenador.</p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-outline-ghost bg-background overflow-hidden flex items-center justify-center">
                                <span className="font-display text-on-surface-variant">#2</span>
                            </div>
                            <div>
                                <p className="font-display text-on-surface text-lg">La Vidente Inquebrantable</p>
                                <p className="font-body text-on-surface-muted text-sm">Por descubrir al demonio en la noche 1 y convencer al pueblo sin revelar su rol.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

          </div>
        </div>
      </div>
    );
  };
  
  export default Muro;
