import { Routes, BrowserRouter, Route } from 'react-router-dom'

//route imports
import LandingPage from './components/landingpage/LandingPage';
import MusicPage from './components/music/MusicPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/music' element={<MusicPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
