import { Routes, BrowserRouter, Route } from 'react-router-dom'

//route imports
import LandingPage from './components/landingpage/LandingPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dog' element={'hi'} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
