import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
}

export default App;
