import { Link } from 'react-router-dom';
import Cita from '../components/Cita';

const Grimorio = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <img src="/calendar_banner_wide.jpg" alt="Calendario" className="w-full h-full object-cover object-center grayscale-[0.5] opacity-80" />

        <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
          <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">El Grimorio</h2>
        </div>
      </div>
      <div className="max-w-5xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
        <div className="bg-surface border border-outline-ghost rounded shadow-2xl p-10 pt-8 relative">
          <div className="bg-surface-low p-8 border border-outline-ghost shadow-inner mb-8 relative z-20 space-y-6">
            <Cita texto="El fuego de la plaza consume mi última coartada. Escucho susurros en las esquinas; no son los vivos quienes me preocupan, sino los ojos fríos de mis víctimas de cada noche. Aunque sus cuerpos yazcan sin vida,* sus espíritus siguen votando... y hoy me señalan a mí*." />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div>
                <h3 className="text-xl font-display text-theme-main mb-3">¿Qué es Blood in the Clocktower?</h3>
                <p className="text-on-surface text-base font-body leading-relaxed">
                  Es un juego de deducción social para entre 5 y 20 jugadores en el que el bien y el mal libran una batalla de ingenio. Un Narrador guía la historia, mientras que cada participante recibe un rol único con habilidades especiales. Lo que lo hace especial es que los jugadores asesinados siguen participando activamente, teniendo un voto fantasmal para influir en el destino del pueblo.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display text-theme-main mb-3">¿Cómo jugamos?</h3>
                <p className="text-on-surface text-base font-body leading-relaxed">
                  En La Secta nos reunimos habitualmente de manera online para desatar el caos. Utilizamos la plataforma <a href="https://www.botc.app">botc.app</a> para visualizar el grimorio en tiempo real y gestionar las interacciones del pueblo, mientras que toda la diplomacia, las acusaciones y los susurros ocurren a través de nuestros canales de voz dedicados en Telegram. La narración inmersiva, las alianzas secretas y las puñaladas por la espalda están garantizadas en cada sesión.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display text-theme-main mb-3">¿Quiénes somos?</h3>
                <p className="text-on-surface text-base font-body leading-relaxed">
                  Somos una comunidad de aficionados a Blood on the Clocktower, abierta e inclusiva, cuyo objetivo es compartir nuestra pasión y generar espacios y oportunidades para jugar, conversar, conocernos e interactuar entre nosotros, creando una comunidad activa donde cada partida sea también una ocasión para conectar con otras personas.
                </p>
              </div>
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
