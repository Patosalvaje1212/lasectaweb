import Cita from '../components/Cita';
import Button from '../components/Button';

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
            <Cita texto="Lo que está muerto no puede morir..." />
            <p className="text-on-surface-muted text-lg relative font-body leading-relaxed">
              ...sino que se alza en la plaza para dar el voto final. Bienvenidos a <span className="text-theme-main font-semibold">La Secta</span>, el rincón donde los hilos de Blood on the Clocktower se mueven en la sombra. Aquí los vivos desconfían, los caídos siguen jugando y el Demonio camina entre nosotros.
            </p>
          </div>
          <div className="flex justify-center w-full mt-4">
            <Button 
              variant="primary"
              href="https://t.me/+bHZ62RndFQI1MmJk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-10 py-4 text-lg relative z-20"
            >
              Únete a la Secta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Atrio;
