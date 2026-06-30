import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import Button from './Button';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-theme-main selection:text-background overflow-x-clip">
      {/* Dark Textured Header */}
      <header className="fixed top-0 w-full z-40 bg-theme-container backdrop-blur-sm border-b border-outline-ghost shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:py-6 md:px-10">
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/" className="flex items-center gap-3 md:gap-5" onClick={closeMenu}>
              <img src="/log_la-secta.png" alt="Logo de La Secta" className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_12px_var(--color-theme-main)]" />
              <h1 className="text-2xl md:text-4xl font-normal tracking-tight text-white drop-shadow-lg whitespace-nowrap" style={{ fontFamily: "'Teutonic No3', 'Cinzel', serif", transform: 'scaleX(0.7)', transformOrigin: 'left', display: 'inline-block' }}>
                La Secta
              </h1>
            </Link>
            
            <nav className="hidden md:flex gap-6 ml-8 mt-2 items-center flex-wrap">
              <Link to="/grimorio" className="text-lg lg:text-xl font-display text-on-surface-muted hover:text-on-surface transition-colors">Grimorio</Link>
              <Link to="/escrituras" className="text-lg lg:text-xl font-display text-on-surface-muted hover:text-on-surface transition-colors">Escrituras</Link>
              <Link to="/plaza" className="text-lg lg:text-xl font-display text-on-surface-muted hover:text-on-surface transition-colors">Plaza</Link>
              <Link to="/calendario" className="text-lg lg:text-xl font-display text-on-surface-muted hover:text-on-surface transition-colors">Calendario</Link>
              <Link to="/unete" className="text-lg lg:text-xl font-display text-theme-main font-medium hover:text-on-surface transition-colors">Únete</Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Desktop Profile / Login */}
            {isAuthenticated && user ? (
              <Link to="/profile" className="hidden md:flex items-center gap-4 hover:bg-surface-container-low p-2 pr-6 rounded-full ring-1 ring-outline-ghost transition-all cursor-pointer group shadow-md" aria-label="Perfil de usuario">
                <div className="w-12 h-12 rounded-full bg-theme-container flex items-center justify-center ring-1 ring-theme-main/50 group-hover:ring-theme-main shadow-[0_0_8px_rgba(var(--color-theme-main),0.2)] transition-all overflow-hidden">
                  <img src={user.profilePicture || "/avatar.png"} alt="Avatar del usuario" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-lg font-display font-medium text-on-surface group-hover:text-theme-main transition-colors">{user.username}</span>
                  <span className="text-sm font-body text-on-surface-muted opacity-80 italic">Adepto</span>
                </div>
              </Link>
            ) : (
              <Button onClick={() => setIsAuthModalOpen(true)} variant="primary" className="hidden md:flex px-6 py-2 opacity-50 cursor-not-allowed" disabled>
                Identificarse
              </Button>
            )}

            {/* Mobile Hamburger Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-[60]"
              aria-label="Abrir menú"
            >
              <span className={`block w-6 h-0.5 bg-theme-main transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-theme-main transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-theme-main transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background/80 backdrop-blur-md z-[50] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Side Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-theme-container border-l border-outline-ghost shadow-2xl z-[55] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 pt-24 flex flex-col h-full overflow-y-auto">
          {/* Profile Section in Mobile Menu */}
          {isAuthenticated && user ? (
            <div className="mb-8 pb-8 border-b border-outline-ghost">
              <Link to="/profile" onClick={closeMenu} className="flex items-center gap-4 hover:bg-surface-container-low p-3 rounded-xl ring-1 ring-outline-ghost transition-all group">
                <div className="w-14 h-14 rounded-full bg-theme-container flex items-center justify-center ring-1 ring-theme-main/50 group-hover:ring-theme-main shadow-[0_0_8px_rgba(var(--color-theme-main),0.2)] transition-all overflow-hidden shrink-0">
                  <img src={user.profilePicture || "/avatar.png"} alt="Avatar del usuario" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xl font-display font-medium text-on-surface group-hover:text-theme-main transition-colors">{user.username}</span>
                  <span className="text-sm font-body text-on-surface-muted opacity-80 italic">Adepto</span>
                </div>
              </Link>
            </div>
          ) : (
            <div className="mb-8 pb-8 border-b border-outline-ghost">
              <Button 
                onClick={() => { setIsAuthModalOpen(true); closeMenu(); }}
                variant="primary"
                className="w-full py-3 opacity-50 cursor-not-allowed"
                disabled
              >
                Identificarse
              </Button>
            </div>
          )}

          {/* Navigation Links in Mobile Menu */}
          <nav className="flex flex-col gap-6">
            <Link to="/grimorio" onClick={closeMenu} className="text-xl font-display text-on-surface-muted hover:text-on-surface transition-colors flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-theme-main/50"></span> Grimorio
            </Link>
            <Link to="/escrituras" onClick={closeMenu} className="text-xl font-display text-on-surface-muted hover:text-on-surface transition-colors flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-theme-main/50"></span> Escrituras
            </Link>
            <Link to="/plaza" onClick={closeMenu} className="text-xl font-display text-on-surface-muted hover:text-on-surface transition-colors flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-theme-main/50"></span> Plaza
            </Link>
            <Link to="/calendario" onClick={closeMenu} className="text-xl font-display text-on-surface-muted hover:text-on-surface transition-colors flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-theme-main/50"></span> Calendario
            </Link>
            <Link to="/unete" onClick={closeMenu} className="text-xl font-display text-theme-main font-medium hover:text-theme-main transition-colors flex items-center gap-4 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-theme-main"></span> Únete
            </Link>
            
            {isAuthenticated && (
              <Button onClick={() => { logout(); closeMenu(); }} variant="text" className="text-xl font-display text-red-400 hover:text-red-300 transition-colors flex items-center gap-4 mt-4 text-left">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Cerrar Sesión
              </Button>
            )}
          </nav>
          
          <div className="mt-auto pt-8 flex justify-center opacity-50">
             <img src="/log_la-secta.png" alt="La Secta Decoración" className="w-16 h-16 object-contain grayscale" />
          </div>
        </div>
      </div>

      {/* Main Container - Full Width */}
      <main className="flex-1 w-full pt-[90px] md:pt-[116px] pb-16 relative">
        <Outlet />
      </main>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default Layout;
