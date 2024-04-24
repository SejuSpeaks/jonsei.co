import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';

//route imports
import LandingPage from './components/landingpage/LandingPage';
import MusicPage from './components/music/MusicPage';
import AudioBar from './components/audiobar/AudioBar';

function App() {
  const [songPlaying, setSongPlaying] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/music' element={<MusicPage isPlaying={isPlaying} setIsPlaying={setIsPlaying} songPlaying={songPlaying} setSongPlaying={setSongPlaying} />} />
        </Routes>
      </BrowserRouter>

      <div className='w-full sticky bottom-0'>
        <AudioBar audioRef={audioRef} songPlaying={songPlaying} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
      </div>

    </div>
  );
}

export default App;
