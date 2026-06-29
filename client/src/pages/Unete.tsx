const Unete = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <img src="/join_banner_wide.jpg" alt="Blood Pact" className="w-full h-full object-cover object-center grayscale-[0.5] opacity-80" />
          
          <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
            <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">Únete al Culto</h2>
          </div>
        </div>
        
        <div className="max-w-5xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
          <div className="bg-surface border border-outline-ghost p-10 rounded shadow-2xl relative grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Formulario de Ingreso */}
            <div>
                <h3 className="text-3xl font-display text-theme-main mb-6 border-b border-outline-ghost pb-2">Formulario de Ingreso</h3>
                <form className="space-y-6 relative z-10">
                <div>
                    <label className="block text-sm font-display text-on-surface-muted mb-2">Tu Alias</label>
                    <input type="text" className="w-full bg-surface-low text-on-surface p-3 rounded-sm border border-outline-ghost focus:outline-none focus:border-theme-main focus:ring-1 focus:ring-theme-main font-body transition-all" placeholder="Ej. El Cuentacuentos" />
                </div>
                <div>
                    <label className="block text-sm font-display text-on-surface-muted mb-2">¿Cómo nos conociste?</label>
                    <select className="w-full bg-surface-low text-on-surface p-3 rounded-sm border border-outline-ghost focus:outline-none focus:border-theme-main focus:ring-1 focus:ring-theme-main font-body transition-all">
                        <option>Búsqueda online</option>
                        <option>Redes Sociales</option>
                        <option>Recomendación de un sectario</option>
                        <option>Villacuervos</option>
                    </select>
                </div>
                
                <button type="button" className="w-full bg-surface-highest text-on-surface p-3 rounded-sm font-display text-[15px] shadow-md border border-outline-ghost hover:bg-theme-main hover:border-theme-main transition-all">
                    Solicitar Acceso a Telegram
                </button>
                </form>
            </div>

            {/* Redes Sociales */}
            <div>
                <h3 className="text-3xl font-display text-theme-main mb-6 border-b border-outline-ghost pb-2">Directorio de Redes</h3>
                <p className="text-on-surface-muted font-body mb-6">Sigue nuestras crónicas, memes de partidas y clips de momentos épicos en nuestras redes.</p>
                <div className="space-y-4">
                    <a href="#" className="flex items-center gap-4 bg-surface-low hover:bg-surface-highest border border-outline-ghost p-4 rounded transition-colors group">
                        <div className="w-10 h-10 bg-[#000] text-white rounded flex items-center justify-center font-display text-xl border border-outline-ghost group-hover:border-theme-main transition-colors">X</div>
                        <div>
                            <p className="font-display text-on-surface group-hover:text-theme-main transition-colors">Twitter / X</p>
                            <p className="text-xs text-on-surface-muted">Anuncios y debates rápidos.</p>
                        </div>
                    </a>
                    <a href="#" className="flex items-center gap-4 bg-surface-low hover:bg-surface-highest border border-outline-ghost p-4 rounded transition-colors group">
                        <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded flex items-center justify-center font-display text-xl border border-outline-ghost transition-colors">Ig</div>
                        <div>
                            <p className="font-display text-on-surface group-hover:text-theme-main transition-colors">Instagram</p>
                            <p className="text-xs text-on-surface-muted">Fotos de grupos y memes.</p>
                        </div>
                    </a>
                    <a href="#" className="flex items-center gap-4 bg-surface-low hover:bg-surface-highest border border-outline-ghost p-4 rounded transition-colors group">
                        <div className="w-10 h-10 bg-[#000] text-[#00f2fe] rounded flex items-center justify-center font-display text-xl border border-outline-ghost transition-colors drop-shadow-[2px_2px_0_#fe0979]">Tk</div>
                        <div>
                            <p className="font-display text-on-surface group-hover:text-theme-main transition-colors">TikTok</p>
                            <p className="text-xs text-on-surface-muted">Clips de partidas y jugadas locas.</p>
                        </div>
                    </a>
                </div>
            </div>

          </div>
        </div>
      </div>
    );
  };
  
  export default Unete;
