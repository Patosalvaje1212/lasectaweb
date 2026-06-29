const Escrituras = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-black flex justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none"></div>
          {/* Reduced side gradients so the panoramic image can be fully seen */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          <img src="/rules_banner_wide.jpg" alt="Grimoire Rules" className="w-full h-full object-cover object-center grayscale-[0.5] opacity-80" />
          
          <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
            <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">Las Sagradas Escrituras</h2>
          </div>
        </div>
        
        <div className="max-w-5xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
          <div className="bg-surface border border-outline-ghost p-10 rounded shadow-2xl relative">
            <div className="space-y-8 relative z-10">
              <div className="bg-surface-low p-6 border border-outline-ghost shadow-inner rounded-sm">
                <h3 className="text-2xl font-display text-theme-main mb-3">1. Código de Conducta</h3>
                <p className="text-on-surface font-body text-lg leading-relaxed">
                  En La Secta valoramos por encima de todo el respeto mutuo. Las traiciones, manipulaciones y conspiraciones se quedan en el juego. No toleramos el acoso, las faltas de respeto personales ni las actitudes tóxicas. Se exige madurez y saber diferenciar el juego de la realidad.
                </p>
              </div>
              <div className="bg-surface-low p-6 border border-outline-ghost shadow-inner rounded-sm">
                <h3 className="text-2xl font-display text-theme-main mb-3">2. Mecánicas Internas</h3>
                <ul className="list-disc list-inside text-on-surface font-body text-lg leading-relaxed space-y-2">
                  <li>Las partidas se anuncian y organizan en el canal de <strong>Telegram</strong>.</li>
                  <li>Utilizamos <strong>Villacuervos</strong> como herramienta visual. Es obligatorio estar familiarizado o avisar al Storyteller para un tutorial previo.</li>
                  <li>El micro debe estar silenciado al morir, respetando siempre las reglas del juego de botC.</li>
                </ul>
              </div>
              <div className="bg-surface-low p-6 border border-outline-ghost shadow-inner rounded-sm">
                <h3 className="text-2xl font-display text-theme-main mb-3">3. Puntualidad y Horarios</h3>
                <p className="text-on-surface font-body text-lg leading-relaxed">
                  Las noches comienzan a una hora concreta. Se ruega estricta puntualidad. Un retraso sin avisar puede suponer ser sacrificado antes de empezar la partida o la sustitución por un Viajero/espectador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Escrituras;
