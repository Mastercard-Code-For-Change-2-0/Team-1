import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ReceiverDashboard from './pages/ReceiverDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<ReceiverDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;