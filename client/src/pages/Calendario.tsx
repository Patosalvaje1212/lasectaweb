import Button from '../components/Button';
import { Hourglass } from 'lucide-react';

const Calendario = () => {
  return (
    <div className="flex flex-col w-full min-h-[80vh]">
      {/* Header Banner */}
      <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <img src="/about_banner_wide.jpg" alt="Dark Library" className="w-full h-full object-cover object-center grayscale-[0.5] opacity-80" />
        
        <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
          <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">El Calendario de Sacrificios</h2>
        </div>
      </div>
      
      {/* Main Container */}
      <div className="max-w-3xl w-full mx-auto px-8 py-10 relative z-20 -mt-20 flex-1">
        <div className="bg-surface border border-outline-ghost p-10 rounded shadow-2xl relative text-center flex flex-col items-center">
          <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
            {/* Pulsing glow background */}
            <div className="absolute inset-0 bg-theme-main/10 rounded-full animate-ping pointer-events-none"></div>
            <div className="w-20 h-20 bg-theme-container/40 border border-theme-main/40 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(177,156,217,0.15)]">
              <Hourglass className="w-10 h-10 text-theme-main animate-pulse" />
            </div>
          </div>

          <h3 className="text-3xl font-display text-theme-main mb-4">Calendario en Preparación</h3>
          
          <p className="text-on-surface-muted text-lg font-body leading-relaxed max-w-lg mb-8">
            Nuestros Storytellers están alineando los astros para programar las próximas noches de juego. Los rituales de invocación y los horarios de las partidas principales se revelarán al Culto muy pronto.
          </p>

          <div className="flex gap-4">
            <Button to="/" variant="primary" className="px-8 py-3">
              Volver al Atrio
            </Button>
            <Button to="/grimorio" variant="outline" className="px-8 py-3">
              Ver el Grimorio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
