import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, token, isAuthenticated, updateUser } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    realName: '',
    botcUsername: '',
    email: '',
    telegramUsername: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    } else if (user) {
      setFormData({
        realName: user.realName || '',
        botcUsername: user.botcUsername || '',
        email: user.email || '',
        telegramUsername: user.telegramUsername || ''
      });
    }
  }, [isAuthenticated, user, navigate]);

  if (!user) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';
      const response = await fetch(`${apiUrl}/auth/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update profile');
      }

      updateUser(data);
      setSuccess('Perfil actualizado correctamente');
      setIsEditing(false);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative h-[45vh] w-full border-b border-outline-ghost bg-background flex justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <img src="/moon_banner_wide.jpg" alt="Bosque Oscuro y Luna" className="w-full h-full object-cover object-center grayscale-[0.5] opacity-80" />
        
        <div className="absolute bottom-12 left-0 right-0 w-full max-w-5xl mx-auto px-8 z-20">
          <h2 className="text-5xl font-display text-on-surface drop-shadow-lg tracking-normal">El Grimorio de {user.username}</h2>
        </div>
      </div>
      
      <div className="max-w-5xl w-full mx-auto px-8 py-10 relative z-20 -mt-20">
        <div className="bg-surface border border-outline-ghost rounded shadow-2xl p-10 relative">
          
          <div className="absolute top-10 right-10 flex gap-4">
            {!isEditing ? (
              <button onClick={() => setIsEditing(true)} className="bg-surface-high border border-outline-ghost px-4 py-2 rounded text-on-surface font-display hover:text-theme-main transition-colors">
                Editar Perfil
              </button>
            ) : (
              <button onClick={() => setIsEditing(false)} className="bg-surface-high border border-outline-ghost px-4 py-2 rounded text-on-surface font-display hover:text-red-400 transition-colors">
                Cancelar
              </button>
            )}
          </div>

          <div className="flex gap-8 mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border border-outline-ghost shadow-md flex-shrink-0 bg-background ring-2 ring-theme-main/50">
              <img src={user.profilePicture || "/avatar.png"} alt="Avatar" className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700" />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <p className="text-on-surface-muted font-display text-sm">Rol Primario</p>
              <p className="text-3xl font-display font-medium text-on-surface">{user.realName || user.username}</p>
              <span className="bg-surface-highest text-on-surface px-3 py-1 rounded-sm text-sm font-display w-max border border-outline-ghost">Adepto de La Secta</span>
            </div>
          </div>
    
          {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded mb-6 text-sm font-body">{error}</div>}
          {success && <div className="bg-green-500/10 border border-green-500/50 text-green-500 p-3 rounded mb-6 text-sm font-body">{success}</div>}

          {!isEditing ? (
            <div className="bg-surface-low p-6 border border-outline-ghost shadow-inner rounded mb-8">
              <h3 className="text-xl font-display text-on-surface mb-6 border-b border-outline-ghost/50 pb-2">Información Personal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-on-surface-muted font-display mb-1">Nombre Real</p>
                  <p className="text-on-surface font-body">{user.realName || '-'}</p>
                </div>
                <div>
                  <p className="text-sm text-on-surface-muted font-display mb-1">Usuario en BotC.app</p>
                  <p className="text-on-surface font-body">{user.botcUsername || '-'}</p>
                </div>
                <div>
                  <p className="text-sm text-on-surface-muted font-display mb-1">Correo Electrónico</p>
                  <p className="text-on-surface font-body">{user.email || '-'}</p>
                </div>
                <div>
                  <p className="text-sm text-on-surface-muted font-display mb-1">Usuario de Telegram</p>
                  <p className="text-on-surface font-body">{user.telegramUsername || '-'}</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-surface-low p-6 border border-theme-main/30 shadow-inner rounded mb-8">
              <h3 className="text-xl font-display text-on-surface mb-6 border-b border-outline-ghost/50 pb-2">Editar Información</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-display text-on-surface-muted">Nombre Real</label>
                  <input name="realName" value={formData.realName} onChange={handleChange} className="bg-surface border border-outline-ghost rounded px-3 py-2 text-on-surface focus:outline-none focus:border-theme-main transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-display text-on-surface-muted">Usuario en BotC.app</label>
                  <input name="botcUsername" value={formData.botcUsername} onChange={handleChange} className="bg-surface border border-outline-ghost rounded px-3 py-2 text-on-surface focus:outline-none focus:border-theme-main transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-display text-on-surface-muted">Correo Electrónico</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="bg-surface border border-outline-ghost rounded px-3 py-2 text-on-surface focus:outline-none focus:border-theme-main transition-colors" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-display text-on-surface-muted">Usuario de Telegram</label>
                  <input name="telegramUsername" value={formData.telegramUsername} onChange={handleChange} className="bg-surface border border-outline-ghost rounded px-3 py-2 text-on-surface focus:outline-none focus:border-theme-main transition-colors" />
                </div>
              </div>
              <button type="submit" className="bg-theme-main text-background font-display font-medium py-2 px-6 rounded hover:bg-theme-main/90 transition-colors">
                Guardar Cambios
              </button>
            </form>
          )}

          <div className="bg-surface-low p-6 border border-outline-ghost shadow-inner rounded">
            <h3 className="text-xl font-display text-on-surface mb-4">Registro Akáshico (Partidas)</h3>
            <ul className="space-y-3 font-body text-on-surface-muted text-[15px]">
              <li className="flex justify-between items-center border-b border-outline-ghost/50 pb-2">
                <span>Trouble Brewing - Demonio: Imp</span>
                <span className="text-on-surface-variant font-medium">Derrota</span>
              </li>
              <li className="flex justify-between items-center border-b border-outline-ghost/50 pb-2">
                <span>Bad Moon Rising - Demonio: Zombuul</span>
                <span className="text-theme-main font-medium">Victoria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
