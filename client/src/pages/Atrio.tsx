import { Link } from 'react-router-dom';

const Atrio = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <img src="/banner_wide.jpg" alt="El Atrio" className="w-full h-full object-cover object-center grayscale-[0.5] opacity-70" />
        
        <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
          <h2 className="text-6xl font-display text-on-surface drop-shadow-lg tracking-normal">El Atrio</h2>
        </div>
      </div>
      <div className="max-w-5xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
        <div className="bg-surface border border-outline-ghost rounded shadow-2xl p-10 pt-8 relative">
          <div className="bg-surface-low p-8 border border-outline-ghost shadow-inner mb-8 relative z-20">
            <h3 className="text-2xl font-display text-theme-main mb-4">La Secta</h3>
            <p className="text-on-surface text-lg relative font-body leading-relaxed italic mb-4">
              «Partidas de Blood on the Clocktower todas las noches.»
            </p>
            <p className="text-on-surface-muted text-base relative font-body leading-relaxed">
              Somos un grupo cerrado de jugadores dedicados al arte del engaño y la deducción. Nuestras noches son diferentes: aquí la confianza es un recurso escaso, y la muerte es solo el principio. Bienvenido al ritual.
            </p>
          </div>
          <div className="flex gap-6">
            <Link to="/unete" className="bg-surface-highest text-on-surface px-8 py-3 font-display text-[15px] shadow-md border border-outline-ghost hover:bg-theme-main hover:border-theme-main transition-all relative z-20 rounded-sm">
              Únete a la Secta
            </Link>
            <Link to="/plaza" className="bg-transparent text-on-surface-muted border border-outline-ghost px-8 py-3 font-display text-[15px] hover:bg-surface-low hover:text-on-surface transition-all inline-block relative z-20 rounded-sm">
              Ver la Plaza
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Atrio;
