import { Link } from 'react-router-dom';

const Grimorio = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <img src="/about_banner_wide.jpg" alt="Dark Library" className="w-full h-full object-cover object-center grayscale-[0.5] opacity-80" />
        
        <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
          <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">El Grimorio</h2>
        </div>
      </div>
      <div className="max-w-5xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
        <div className="bg-surface border border-outline-ghost rounded shadow-2xl p-10 pt-8 relative">
          <div className="bg-surface-low p-8 border border-outline-ghost shadow-inner mb-8 relative z-20 space-y-6">
            <div>
              <h3 className="text-2xl font-display text-theme-main mb-3">¿Qué es Blood on the Clocktower?</h3>
              <p className="text-on-surface text-lg font-body leading-relaxed">
                Blood on the Clocktower (BotC) es el "hermano mayor" de juegos de deducción social como Los Hombres Lobo de Castronegro. Es un juego de engaño, lógica y asesinatos nocturnos donde la muerte no es el final: los jugadores muertos siguen hablando e influyendo en la partida. Nadie es un simple aldeano, todos tienen un rol único con un poder especial.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display text-theme-main mb-3">¿Cómo Jugamos?</h3>
              <p className="text-on-surface text-lg font-body leading-relaxed">
                Utilizamos <strong>Villacuervos</strong> para la gestión del tablero virtual y los grimorios del cuentacuentos, combinando la experiencia con <strong>Telegram</strong> (para el chat de voz, grupos privados y llamadas). Somos una comunidad activa que disfruta de las conspiraciones, la interpretación y, sobre todo, el buen ambiente.
              </p>
            </div>
          </div>
          <Link to="/escrituras" className="inline-block text-theme-main hover:text-on-surface transition-colors font-display text-[15px] underline relative z-20">
            Aprender las Sagradas Escrituras &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grimorio;
