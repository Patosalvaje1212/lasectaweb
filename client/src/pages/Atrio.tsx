import Cita from '../components/Cita';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';

const Atrio = () => {
  return (
    <div className="flex flex-col w-full">
      <PageHeader 
        title="El Atrio" 
        imageSrc="/banner_wide.jpg" 
        imageAlt="El Atrio" 
        imageOpacity="opacity-70" 
      />
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
