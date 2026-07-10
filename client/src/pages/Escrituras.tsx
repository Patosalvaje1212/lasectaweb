import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  HeartHandshake,
  Scale,
  Scroll,
  Calendar,
  Sparkles,
  Video,
  Send,
  Coins,
  Key,
  MessagesSquare,
  UserX,
  Gift,
  Users,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const SECTIONS = [
  { id: 'sec-0', label: '0. Nuestra base', short: 'Nuestra Base', icon: HeartHandshake },
  { id: 'sec-1', label: '1. Proponer leyes', short: 'Proponer Leyes', icon: Scale },
  { id: 'sec-2', label: '2. Narración', short: 'Narración', icon: Scroll },
  { id: 'sec-3', label: '3. Proponer partidas', short: 'Proponer Partidas', icon: Calendar },
  { id: 'sec-4', label: '4. Jugar partidas', short: 'Jugar Partidas', icon: Sparkles },
  { id: 'sec-5', label: '5. Partidas grabadas', short: 'Partidas Grabadas', icon: Video },
  { id: 'sec-6', label: '6. Telegram', short: 'Telegram', icon: Send },
  { id: 'sec-7', label: '7. Economía', short: 'Economía', icon: Coins },
  { id: 'sec-8', label: '8. Segunda cuenta', short: 'Segunda Cuenta', icon: Key },
  { id: 'sec-9', label: '9. Debate y gestión', short: 'Debate y Gestión', icon: MessagesSquare },
  { id: 'sec-10', label: '10. Miembros expulsados', short: 'Expulsiones', icon: UserX },
  { id: 'sec-11', label: '11. Donación Villacuervos', short: 'Villacuervos', icon: Gift },
  { id: 'sec-12', label: '12. Grupos de trabajo', short: 'Grupos de Trabajo', icon: Users },
  { id: 'sec-13', label: '13. Convivencia y resolución', short: 'Convivencia', icon: ShieldCheck },
];

const Escrituras = () => {
  const [activeSection, setActiveSection] = useState('sec-0');

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '-130px 0px -70% 0px', // offset fixed header at top and check upper-middle screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Height of fixed header + spacing
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <PageHeader
        title="El Códice"
        subtitle="El compendio de leyes y normas de convivencia que rigen la comunidad de La Secta."
        imageSrc="/rules_banner_wide.jpg"
        imageAlt="Grimoire Rules"
        bgClass="bg-black"
        gradientClass="from-black"
        maxWidthClass="max-w-7xl"
      />

      {/* Main Layout Container */}
      <div className="max-w-7xl w-full mx-auto px-0 md:px-10 py-4 md:py-10 relative z-20 -mt-20 flex-1">
        <div className="bg-transparent md:bg-surface border-0 md:border border-transparent md:border-outline-ghost p-4 md:p-10 rounded-none md:rounded shadow-none md:shadow-2xl relative flex flex-col md:flex-row gap-8 lg:gap-12">

          {/* Mobile Sticky Navigation */}
          <div className="md:hidden sticky top-[80px] z-30 bg-surface border-b border-outline-ghost -mx-6 px-6 py-3 overflow-x-auto no-scrollbar flex gap-2 mb-4">
            {SECTIONS.map((sec) => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-sm font-display text-xs whitespace-nowrap transition-all border ${isActive
                    ? 'bg-theme-container/50 text-theme-main border-theme-main/50 font-semibold shadow-md'
                    : 'bg-surface-low border-outline-ghost text-on-surface-muted hover:text-on-surface'
                    }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{sec.short}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop Sidebar (Table of Contents) */}
          <aside className="hidden md:block w-64 lg:w-72 shrink-0 sticky top-28 self-start bg-surface-low/50 border border-outline-ghost p-5 rounded shadow-lg max-h-[calc(100vh-10rem)] overflow-y-auto no-scrollbar">
            <h4 className="text-xs font-display text-on-surface-muted tracking-widest uppercase border-b border-outline-ghost pb-3 mb-4 font-semibold">
              Leyes y Decretos
            </h4>
            <nav className="space-y-1">
              {SECTIONS.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-sm font-display text-xs lg:text-sm transition-all duration-200 group relative border-l-2 ${isActive
                      ? 'bg-theme-container/20 text-theme-main border-theme-main pl-4 font-semibold shadow-[inset_1px_0_0_rgba(177,156,217,0.1)]'
                      : 'text-on-surface-muted hover:text-on-surface hover:bg-surface-high/40 border-transparent'
                      }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'scale-110 text-theme-main' : 'opacity-70 group-hover:opacity-100 group-hover:scale-105'}`} />
                    <span className="truncate">{sec.label}</span>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto text-theme-main animate-pulse" />}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Laws Content Columns */}
          <div className="flex-1 min-w-0 space-y-10">

            {/* Section 0 */}
            <section
              id="sec-0"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <HeartHandshake className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">0. Nuestra base</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">
                <p>
                  <strong className="text-theme-main mr-2 font-display">0.1</strong> Pórtate bien con la gente. Al final lo que nos une es sólo el gusto por un juego de mesa y no tenemos que llevarnos bien, pero sí respetarnos. Nunca olvides que lo que hacemos es jugar, en principio divertirnos.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">0.2</strong> Si tienes un problem con alguien, trata de arreglarlo directamente con esa persona. Casi todos aquí somos adultos y deberíamos poder respetar nuestras diferencias y ceder un poco también para tener una comunidad sana.
                </p>
              </div>
            </section>

            {/* Section 1 */}
            <section
              id="sec-1"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <Scale className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">1. Proponer leyes</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">
                <p>
                  <strong className="text-theme-main mr-2 font-display">1.1</strong> Puede proponer nuevas leyes o cambios de las que hay cualquiera que haya jugado una partida en La Secta en los últimos 60 días antes de realizar la propuesta.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">1.2</strong> Puede votar para aprobar o vetar las propuestas cualquiera que haya jugado una partida en La Secta en los últimos 60 días antes de que la propuesta haya sido realizada.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">1.3</strong> Si tu propuesta requiere del trabajo de otra gente, que sea el tuyo o que esa gente esté de acuerdo. Nunca propongas trabajo para los demás sin decírselo, básicamente porque no lo van a hacer.
                </p>


                <p className="flex items-start gap-2">
                  <strong className="text-theme-main font-display">1.4</strong>
                  <span>Para que una propuesta se acepte debe cumplir, en 14 días:</span>
                </p>
                <ul className="list-disc list-inside pl-6 mt-1 space-y-1 text-on-surface/90">
                  <li>Tener más votos positivos que negativos.</li>
                </ul>


                <p>
                  <strong className="text-theme-main mr-2 font-display">1.5</strong> Puedes dejar comentarios en las propuestas para proponer cambios o explicar por qué te parece bien o mal.
                </p>


                <p className="flex items-start gap-2">
                  <strong className="text-theme-main font-display">1.6</strong>
                  <span>Para que una propuesta se acepte antes de 14 días:</span>
                </p>
                <ul className="list-disc list-inside pl-6 mt-1 space-y-1 text-on-surface/90">
                  <li>Tener al menos 15 votos positivos.</li>
                  <li>No tener más de 1 voto negativo.</li>
                  <li>Que hayan pasado al menos 3 días desde la propuesta.</li>
                </ul>

              </div>
            </section>

            {/* Section 2 */}
            <section
              id="sec-2"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <Scroll className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">2. Narración</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">
                <p>
                  <strong className="text-theme-main mr-2 font-display">2.1</strong> Para poder narrar tienes que estar al día en las aportaciones de La Secta. (Ver el punto <a href="#sec-7" onClick={(e) => scrollToSection(e, 'sec-7')} className="text-theme-main hover:underline hover:text-theme-main/80 font-semibold transition-colors">7. Economía</a> de estas normas)
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">2.2</strong> Si quieres narrar, ve a comunidades y, en La Secta, verás un enlace para convertirte en Storyteller.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">2.3</strong> Hay un grupo de Telegram de narradores al que puede entrar cualquier narrador.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">2.4</strong> Hay una única cuenta de La Secta para la web <a href="https://botc.app" target="_blank" rel="noopener noreferrer" className="text-theme-main hover:underline hover:text-theme-main/80 break-all font-semibold transition-colors">https://botc.app</a>. El usuario y la contraseña están en el grupo de Telegram de narradores.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">2.5</strong> Puedes probar a narrar de vez en cuando en cualquier caso, simplemente pídeselo a alguien que tenga cuenta para que te abra la sala. Ten en cuenta que hay mucha gente que quiere narrar: si quieres narrar, lo mejor es que pagues la cuota y sigas las reservas de la <a href="#sec-3" onClick={(e) => scrollToSection(e, 'sec-3')} className="text-theme-main hover:underline hover:text-theme-main/80 font-semibold transition-colors">ley 3</a>.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="sec-3"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <Calendar className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">3. Proponer partidas</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">

                <p>
                  <strong className="text-theme-main mr-2 font-display">3.1</strong> Para las partidas de la noche, al ser muchos narradores, existe un sistema de reservas.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">3.2</strong> Las reservas se deben hacer para las noches de dentro de más de 7 días, las del horario de partida nocturna principal.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">3.3</strong> La partida nocturna principal es entre las 21:00 y las 23:00.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">3.4</strong> Puedes reservar un día específico manualmente al marcar cualquier día dentro de más de 7 días de hoy.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">3.5</strong> Puedes reservar un día de la semana automáticamente en las reservas automáticas.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">3.6</strong> La reserva se resuelve asignándosela a quien tenga una reserva manual o automática, que lleve más días sin crear una partida en la web dentro del horario de partida principal. Por ahora, no hay ninguna norma de cuándo se debe crear esa partida antes de considerar libre el día. Ojalá no haga falta nunca. Si surge algún problema, resuélvelo en el grupo de Telegram de narradores.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">3.7</strong> Para partidas de menos de 1 semana, fíjate si ya hay reserva (en la misma creación de la partida lo puedes ver).
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section
              id="sec-4"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <Sparkles className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">4. Jugar partidas</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">
                <p>
                  <strong className="text-theme-main mr-2 font-display">4.1</strong> Para jugar necesitas una cuenta en <a href="http://botc.app/" target="_blank" rel="noopener noreferrer" className="text-theme-main hover:underline hover:text-theme-main/80 break-all font-semibold transition-colors">http://botc.app/</a> (usuario y contraseña, nada más). Te saldrá algo de Patreon, pero ignóralo, que es sólo para crear partidas.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">4.2</strong> Apúntate a las partidas en la sección de rituales de la web.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">4.3</strong> Unos 15 minutos antes de la partida, quien narre pondrá en Telegram el enlace a la sala, aunque, en principio, también estará en la propia convocatoria de la partida en la web. Aquí tienes un <a href="https://www.youtube.com/@Lasecta_botc" target="_blank" rel="noopener noreferrer" className="text-theme-main hover:underline hover:text-theme-main/80 font-semibold transition-colors">vídeo de cómo usar la app oficial</a>.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="sec-5"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <Video className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">5. Partidas grabadas</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">
                <p>
                  <strong className="text-theme-main mr-2 font-display">5.1</strong> Hay que avisar con antelación cuándo se van a grabar las partidas.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">5.2</strong> Si te apuntas a una partida grabada, tienes que aceptar ese tipo de partidas en tu perfil. Puedes pedir con antelación si prefieres que tu cámara no salga en el vídeo (sí la verá quien juegue).
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">5.3</strong> Las partidas las subirá quien las grabe (o alguien que se proponga a hacerlo) a la cuenta de <a href="https://www.youtube.com/@Lasecta_botc" target="_blank" rel="noopener noreferrer" className="text-theme-main hover:underline hover:text-theme-main/80 font-semibold transition-colors">YouTube de La Secta</a>.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">5.4</strong> Está estandarizado el lunes como día regular para grabar partidas. Si quieres hacerlo otro día de manera puntual no habría problema.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section
              id="sec-6"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <Send className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">6. Telegram</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">
                <p>
                  <strong className="text-theme-main mr-2 font-display">6.1</strong> Alguna gente tiene permisos para manejar algo más el grupo. Puedes ver el listado de quién los tiene <Link to="/plaza" className="text-theme-main hover:underline hover:text-theme-main/80 font-semibold transition-colors">aquí</Link>. Si quieres tener esos permisos, pídeselo a cualquiera de esa lista. Pídelo sólo si vas a ser responsable con el grupo.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">6.2</strong> Puedes entrar en Telegram con <a href="https://t.me/+bHZ62RndFQI1MmJk" target="_blank" rel="noopener noreferrer" className="text-theme-main hover:underline hover:text-theme-main/80 font-semibold transition-colors">este enlace</a>. Alguien con los permisos del 6.1 te admitirá.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">6.3</strong> En los canales de Anuncios / Bienvenida y Próximas partidas sólo pueden escribir quienes tengan los permisos del 6.1 para evitar conversaciones por ahí.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">6.4</strong> Los canales de Próximos eventos y Próximas partidas deben estar limpios de mensajes que no sean eventos o próximas partidas. Cualquiera con permisos del 6.1 podrá ir limpiando los mensajes.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section
              id="sec-7"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <Coins className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">7. Economía</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">
                <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded mb-4 text-amber-200 text-base shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                  <span className="font-bold font-display uppercase tracking-wider block text-amber-400 mb-1">Estado de Donaciones:</span>
                  ACTUALMENTE LAS DONACIONES ESTÁN SUSPENDIDAS (Saldo actual: 534,65€)
                </div>
                <p>
                  <strong className="text-theme-main mr-2 font-display">7.1</strong> Ahora mismo, La Secta se gasta dinero en:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-1.5 text-on-surface/90">
                  <li>Cuenta Patreon para la app oficial: 17,55 € mensuales.</li>
                  <li>Una donación puntual de 150€ a la web de Villacuervos aprobada por votación en la plaza el 24/02/26 (Donativo realizado el día 06/03/26).</li>
                </ul>
                <p>
                  <strong className="text-theme-main mr-2 font-display">7.2</strong> Cuando termine la suspensión puedes donar dinero por Bizum al teléfono que aparecerá en esta sección, poniendo tu nombre de La Secta en el mensaje. Todo lo que dones se apunta como 0,5 € por mes.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">7.3</strong> Donar dinero no da más privilegios que poder narrar regularmente. Incluso si quieres narrar puntualmente o vas mal de dinero, ni hace falta. Puedes ver quién ha colaborado <Link to="/plaza" className="text-theme-main hover:underline hover:text-theme-main/80 font-semibold transition-colors">aquí</Link>.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">7.4</strong> Puedes pedir la devolución de lo que has donado para meses futuros cuando quieras.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">7.5</strong> Cuando los fondos de las donaciones supere la cantidad necesaria para pagar la cuenta de la Secta durante dos años (24x17,55=421,2), se suspenderá la aceptación de donaciones. Se volverá a activar la aceptación de donaciones cuando los fondos sean inferiores a lo necesario para pagar la cuenta durante un año (12x17,55=210,6). El estado de la donación se indicará en este mismo artículo en cada momento.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">7.6</strong> Durante los periodos de suspensión de donaciones, el punto 2.1 del artículo de 2 Narración, quedará también en suspenso, no siendo necesario estar al corriente de cuotas en las aportaciones para poder narrar.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section
              id="sec-8"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <Key className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">8. Segunda cuenta de botc.app</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">

                <p className="flex items-start gap-2">
                  <strong className="text-theme-main font-display">8.1</strong>
                  <span>El alta de la cuenta dependerá de que se cumplan los 2 puntos siguientes, en cuanto uno de los 2 no se cumpla se procederá al cambio en el estado de la cuenta lo antes posible:</span>
                </p>
                <ul className="list-disc list-inside pl-6 mt-2 space-y-1.5 text-on-surface/90">
                  <li>Durante las 4 semanas anteriores se ha debido necesitar un uso de una segunda cuenta para una segunda partida paralela al menos 4 días a la semana de media. Para la comprobación se podrá realizar <Link to="/calendario" className="text-theme-main hover:underline hover:text-theme-main/80 font-semibold transition-colors">aquí</Link>.</li>
                  <li>La reserva económica de los pagos de la secta debe tener garantizado el pago de los próximos 6 meses incluyendo en el cálculo de costes el mantenimiento de las 2 cuentas y los variados costes de los servicios de la web.</li>
                </ul>

                <p>
                  <strong className="text-theme-main mr-2 font-display">8.2</strong> El usuario y la contraseña de la segunda cuenta estará disponible para los narradores en el mismo espacio en el que se compartan los de la primera.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">8.3</strong> El narrador principal del día será la persona que coordine, busque y decida quién narrará la segunda partida, de entre las personas con permisos de narrador, en caso de que se produzca.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">8.4</strong> El narrador principal tendrá la decisión final si hay mas de una partida sobre cómo se dividen los jugadores y qué narrador narra qué partida de las múltiples que haya u otras condiciones extra que se pudieran producir.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section
              id="sec-9"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <MessagesSquare className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">9. Canal de debate interno y gestión</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">
                <p>
                  <strong className="text-theme-main mr-2 font-display">9.1</strong> El grupo de Telegram tiene un canal, «Gestión y debate interno», para llevar ahí los debates de gestión del grupo y los problemas de convivencia.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section
              id="sec-10"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <UserX className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">10. Protocolo de Expulsiones</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">
                <p className="font-semibold text-theme-main">Actuación en caso de que un miembro expulsado de la Comunidad se meta en una partida organizada con la cuenta o en la Comunidad de La Secta:</p>
                <ul className="list-disc list-inside pl-4 space-y-3 text-on-surface/90">
                  <li>El Narrador le pedirá que abandone la partida y procederá a sacarle de ella.</li>
                  <li>Si el Narrador no quiere enfrentarse al usuario por el motivo que sea, puede solicitar a cualquier otro usuario (narrador, admin o jugador normal) de la partida o de Telegram que informe al jugador y proceda a la expulsión de la partida subiéndole a narrar con él. Si se da la situación de que nadie quisiera enfrentarse al jugador, el Narrador procederá a cancelar la partida.</li>
                </ul>
              </div>
            </section>

            {/* Section 11 */}
            <section
              id="sec-11"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <Gift className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">11. Donación a Villacuervos</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">
                <p>
                  Tras el traspaso de poderes de tesorería a <strong className="text-theme-main">Cainite</strong>, sabemos que a fecha 20/02/26 tenemos un fondo de 692,2€. Con ese dinero estamos pagando la cuenta de Patreon con la que montamos partidas (17,55€/mes), lo que significa que tenemos saldo suficiente para cubrir aproximadamente 39,44 meses.
                </p>
                <p>
                  Hacer una donación a Roberto por el uso que damos a su web, <a href="https://villacuervos.es" target="_blank" rel="noopener noreferrer" className="text-theme-main hover:underline hover:text-theme-main/80 font-semibold transition-colors">villacuervos.es</a>. Somos la comunidad más grande y activa que utiliza la web. La usamos a diario para organizar partidas, llevar seguimiento de roles, victorias, derrotas, guiones y estadísticas en general. Además, la web está en constante crecimiento, con mejoras y nuevas funciones, lo cual implica tiempo y dedicación. A día de hoy Roberto no nos ha pasado ninguna factura, pero antes de que eso llegue a ocurrir, propongo que como comunidad nos adelantemos y ofrezcamos un donativo.
                </p>
                <div className="bg-theme-container/20 border border-theme-main/35 p-4 rounded text-on-surface mt-4 shadow-[0_0_12px_rgba(177,156,217,0.05)]">
                  Se aprueba la propuesta de que la donación sea de <strong className="text-theme-main">150€</strong>. Propuesta 11.1, aprobada por 20 votos a favor y ninguno en contra. Y aun con todo, el propio Roberto debería aceptar la donación.
                </div>
              </div>
            </section>

            {/* Section 12 */}
            <section
              id="sec-12"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <Users className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">12. Grupos de Trabajo Voluntarios</h3>
              </div>
              <div className="space-y-6 font-body text-lg text-on-surface leading-relaxed">
                <div>
                  <h4 className="text-base font-display text-theme-main mb-2 tracking-wide font-semibold flex items-center gap-2">
                    <span>👁️ Justificación y Objetivo: Diagnóstico de la Comunidad</span>
                  </h4>
                  <p className="mb-3">
                    Si analizamos los datos de un tiempo a esta parte, es evidente que hemos experimentado un decaimiento en el número de jugadores activos y en el volumen de partidas. Este estancamiento no se debe a que el juego haya perdido interés, sino principalmente a la falta de publicidad y difusión exterior de nuestra comunidad. Nos hemos cerrado involuntariamente en nuestro propio círculo.
                  </p>
                  <p className="mb-3">
                    Para revertir esta tendencia, asegurar que La Secta evolucione y vuelva a llenarse de vida, propongo formalizar la creación de Grupos de Trabajo Voluntarios. El objetivo, apoyándonos en nuestra base (Normas 0.1 y 0.2), es:
                  </p>
                  <ul className="list-disc list-inside pl-4 space-y-2 text-on-surface/90">
                    <li><strong className="text-theme-main font-display text-sm lg:text-base">Difusión y Crecimiento:</strong> Diseñar estrategias activas para dar a conocer La Secta fuera de nuestro entorno actual, atraer sangre nueva y revertir la baja participación.</li>
                    <li><strong className="text-theme-main font-display text-sm lg:text-base">Inclusión y Tolerancia:</strong> Crear un protocolo de bienvenida que garantice que esos nuevos jugadores se integren fácilmente, se sientan seguros y respetados, y se queden en la comunidad.</li>
                    <li><strong className="text-theme-main font-display text-sm lg:text-base">Transparencia y Sostenibilidad:</strong> Abrir la gestión a todo el que quiera sumar para expandir La Secta con nuevos proyectos (eventos, redes, logística) sin quemar a los administradores y narradores actuales.</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-outline-ghost/40">
                  <h4 className="text-base font-display text-theme-main mb-2 tracking-wide font-semibold flex items-center gap-2">
                    <span>🛠️ Marco de Funcionamiento (Acorde a la Norma 1.3)</span>
                  </h4>
                  <p className="mb-3">
                    Para cumplir estrictamente con la norma de no imponer trabajo a los demás y asegurar el buen funcionamiento del proyecto, las comisiones se regirán bajo los siguientes pilares:
                  </p>
                  <ul className="list-disc list-inside pl-4 space-y-2 text-on-surface/90">
                    <li><strong className="text-theme-main font-display text-sm lg:text-base">Carácter 100% Voluntario:</strong> Ningún miembro de La Secta estará obligado a trabajar en estas comisiones. Los grupos se nutrirán exclusivamente de personas que decidan donar su tiempo libremente.</li>
                    <li><strong className="text-theme-main font-display text-sm lg:text-base">Carácter y Propiedad Comunitaria:</strong> Todo el material generado por y para estos grupos de trabajo (vídeos de YouTube, guías de iniciación, manuales, diseños gráficos o cualquier material de difusión y apoyo) pertenecerá en exclusividad a La Secta y no al creador individual que forme parte del grupo de trabajo. Esto garantiza que el esfuerzo colectivo permanezca siempre en beneficio de la comunidad.</li>
                    <li><strong className="text-theme-main font-display text-sm lg:text-base">Autonomía y Coordinación:</strong> Se crearán inicialmente áreas de enfoque centradas en la solución del problema (Difusión, Bienvenida y Eventos). Cada grupo se autoorganizará para proponer ideas constructivas.</li>
                    <li><strong className="text-theme-main font-display text-sm lg:text-base">Transparencia:</strong> Cualquier iniciativa de calado que surja de estos grupos y que afecte a la normativa general de la comunidad se someterá, de igual modo, al sistema de votación vigente del Punto 1.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 13 */}
            <section
              id="sec-13"
              data-section
              className="scroll-mt-28 bg-surface-low border border-outline-ghost rounded p-6 md:p-8 hover:border-theme-main/30 transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-outline-ghost pb-3">
                <ShieldCheck className="w-6 h-6 text-theme-main" />
                <h3 className="text-xl md:text-2xl font-display text-theme-main leading-none">13. Convivencia y Resolución de Conflictos</h3>
              </div>
              <div className="space-y-4 font-body text-lg text-on-surface leading-relaxed">
                <p className="italic text-on-surface-muted border-b border-outline-ghost/30 pb-2 mb-3">
                  Supresión de las expulsiones vigentes en La Secta. Estudio de medidas de resolución de conflictos.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">13.1</strong> Todo el mundo puede participar en las partidas de la comunidad. En la actualidad no hay ninguna persona que tenga prohibido jugar en La Secta.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">13.2</strong> Se recomendará a las personas que jueguen en las partidas convocadas por La Secta que estén previamente inscritos en la partida y que formen parte del grupo de Telegram de la comunidad, pero si quedan huecos en la partida y el narrador lo desea por la configuración de partida, podrán jugar aún sin estar apuntados.
                </p>
                <p>
                  <strong className="text-theme-main mr-2 font-display">13.3</strong> Los conflictos que puedan surgir entre los jugadores, se tratarán de resolver en el momento que ocurren entre las personas involucradas en el problema, y si no se llegara a un acuerdo o resolución, se podrá solicitar la colaboración del narrador. Si el conflicto superara los recursos del narrador, se necesitaran medidas correctivas para alguno(s) de los involucrados o se repitiera de forma reiterada, se podrán estudiar con el resto de la comunidad medidas sancionadoras, que deberán ser votadas, aprobadas y definidas en duración y forma por los miembros de La Secta, y que serán siempre comunicadas a las personas apercibidas, para que sean conocedores de las medidas adoptadas y de la duración de las mismas.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Escrituras;
