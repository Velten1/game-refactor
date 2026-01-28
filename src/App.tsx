import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import DefaultLayout from './components/default-layout/DefaultLayout.tsx';
import MapPage from './pages/MapPage.tsx';

function App() {
 
  return (
  <Router>
    <Routes>
      <Route path="/" element={<DefaultLayout><MapPage /></DefaultLayout>} />
    </Routes>
  </Router>
  )
}

export default App
