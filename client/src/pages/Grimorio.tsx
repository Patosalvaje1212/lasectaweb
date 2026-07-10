import { Link } from 'react-router-dom';
import Cita from '../components/Cita';
import PageHeader from '../components/PageHeader';

const Grimorio = () => {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="El Grimorio" 
        imageSrc="/calendar_banner_wide.jpg" 
        imageAlt="Calendario" 
      />
      <div className="max-w-5xl w-full mx-auto px-0 md:px-8 py-4 md:py-10 relative z-20 -mt-20">
        <div className="bg-transparent md:bg-surface border-0 md:border border-transparent md:border-outline-ghost rounded-none md:rounded shadow-none md:shadow-2xl px-4 py-6 md:p-10 md:pt-8 relative">
          <div className="bg-surface-low p-4 md:p-8 border border-outline-ghost shadow-inner mb-8 relative z-20 space-y-6">
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
            El Códice &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Grimorio;
