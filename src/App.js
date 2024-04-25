import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { music } from './info';
import custom from './assets/ika00.ani';
import hover from './assets/ika14.ani';
import { applyCursor } from './components/utils/applyCursor'


//route imports
import LandingPage from './components/landingpage/LandingPage';
import MusicPage from './components/music/MusicPage';
import Code from './components/code/Code';
import AudioBar from './components/audiobar/AudioBar';
import Blog from './components/blog/Blog';
import Pictures from './components/pictures/Pictures';


function App() {
  const firstSong = music[0]
  applyCursor('.app', custom);
  applyCursor('.hover', hover);
  const [songPlaying, setSongPlaying] = useState(firstSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const togglePlay = () => {
    isPlaying ? setIsPlaying(false) : setIsPlaying(true)

  }
  document.onkeyup = function (e) {
    if (e.key === " " || e.code === "Space") {
      togglePlay()
    }
  }

  window.onkeydown = function (e) {
    return !(e.keyCode === 32 && e.target === document.body);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying])

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/music' element={<MusicPage isPlaying={isPlaying} setIsPlaying={setIsPlaying} songPlaying={songPlaying} setSongPlaying={setSongPlaying} />} />
          <Route path='/code' element={<Code />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/pictures' element={<Pictures />} />
        </Routes>
      </BrowserRouter>

      <div className='w-full sticky bottom-0'>
        <AudioBar setSongPlaying={setSongPlaying} audioRef={audioRef} songPlaying={songPlaying} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
      </div>

    </div>
  );
}

export default App;
