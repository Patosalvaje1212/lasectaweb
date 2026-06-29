import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Atrio from './pages/Atrio';
import Grimorio from './pages/Grimorio';
import Escrituras from './pages/Escrituras';
import Plaza from './pages/Plaza';
import Calendario from './pages/Calendario';
import Unete from './pages/Unete';
import Muro from './pages/Muro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Atrio />} />
          <Route path="grimorio" element={<Grimorio />} />
          <Route path="escrituras" element={<Escrituras />} />
          <Route path="plaza" element={<Plaza />} />
          <Route path="calendario" element={<Calendario />} />
          <Route path="unete" element={<Unete />} />
          <Route path="muro" element={<Muro />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
